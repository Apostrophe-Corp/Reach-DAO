import React, { useState } from "react";
import {
    loadStdlib,
    ALGO_MyAlgoConnect as MyAlgoConnect
} from "@reach-sh/stdlib";
import * as backend from "../build/index.main.mjs";
const reach = loadStdlib(process.env);

reach.setWalletFallback(
    reach.walletFallback({
        providerEnv: "TestNet",
        MyAlgoConnect,
    })
);

const { standardUnit } = reach;
const defaultDeadline = { ETH: 1000, ALGO: 10000, CFX: 100000 }[reach.connector];

export const ReachContext = React.createContext();

const ReachContextProvider = ({ children }) => {
    const [defaults] = useState({
        defaultFundAmt: "10",
        defaultContribution: "1",
        defaultTokenSupply: 1000000000,
        standardUnit,

    });
    const [views, setViews] = useState({
        view: "ConnectAccount",
        wrapper: "AppWrapper",
    });
    const [user, setUser] = useState({
        account: "",
        balance: "",
    });

    const [contract, setContract] = useState(null);
    const [deadline, setDeadline] = useState(defaultDeadline);
    const [contribution, setContribution] = useState(defaults.defaultContribution);
    const [resolveContribution, setResolveContribution] = useState({});
    const [tokenID, setTokenID] = useState(null);
    const [tokenSupply, setTokenSupply] = useState(defaults.defaultTokenSupply);

    const connectAccount = async () => {
        const account = await reach.getDefaultAccount();
        const balAtomic = await reach.balanceOf(account);
        const balance = reach.formatCurrency(balAtomic, 4);
        setUser({
            account,
            balance
        });
        if (await reach.canFundFromFaucet()) {
            setViews({ view: "FundAccount" });
        } else {
            setViews({ view: "DeployerOrAttacher", wrapper: "AppWrapper" });
        }
    };

    const fundAccount = async (fundAmount) => {
        await reach.fundFromFaucet(user.account, reach.parseCurrency(fundAmount ?? defaults.defaultFundAmt));
        setViews({ views: "DeployerOrAttacher" });
    };

    const skipFundAccount = async () => {
        setViews({ view: "DeployerOrAttacher", wrapper: "AppWrapper" });
    };

    const selectAttacher = () => {
        setViews({ wrapper: "AttacherWrapper", view: "Attach" });
    };

    const selectDeployer = () => {
        setViews({ wrapper: "DeployerWrapper", view: "MakeProposal" });
    };

    const commonInteract = {
        ...reach.hasRandom
    };

    const deploy = async () => {
        const token = reach.launchToken(user.account, 'REACHTOKEN', 'RSH', { supply: tokenSupply });
        setTokenID(token.id);
        const ctc = user.account.contract(backend);
        setViews({ view: "Deploying" });
        ctc.p.Deployer(DeployerInteract);
        const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2);
        console.log(ctcInfoStr);
        setContract({ ctcInfoStr });
        setViews({ view: "Confirmed" });
    };

    const stake = async (num) => {
        const [amt, amtOfTokens] = await reach.balancesOf(user.account, [null, tokenID]);
        if (amtOfTokens && amtOfTokens >= num) {
            const ctc = user.account.contract(backend, contract);
            try {
                await ctc.apis.Proposer.stake(num);
                setViews({ view: "Confirmed", wrapper: "DeployerWrapper" });
            } catch (error) {
                alert("Sorry your staking could not be processed...");
            }
        } else {
            alert(`Sorry the amount of tokens you own is not sufficient...\n \nYou currently have ${reach.formatCurrency(amt)} ${standardUnit} and ${amtOfTokens} Reach Token${amtOfTokens > 1 ? 's' : ''}.`);
        }
    };

    const makeProposal = async ({ networkName = "ETH", blocks = 10 }) => {
        const proposalSetup = async () => {
            // TODO implement the interact functionality
            /**
             * Plans to set a deadline for a proposal upon creation
             * Although it may seem a deadline is would be kinda tricky to implement
             * */
            const makeDeadline = ({ network = networkName, value = blocks }) => {
                const deadline = {};
                const VALUE = Math.round(value);
                switch (network) {
                    case "ETH":
                        deadline['ETH'] = VALUE;
                        deadline['ALGO'] = VALUE * 10;
                        deadline['CFX'] = VALUE * 100;
                        break;
                    case "ALGO":
                        deadline['ETH'] = VALUE / 10;
                        deadline['ALGO'] = VALUE;
                        deadline['CFX'] = VALUE * 10;
                        break;
                    case "CFX":
                        deadline['ETH'] = VALUE / 100;
                        deadline['ALGO'] = VALUE / 10;
                        deadline['CFX'] = VALUE;
                        break;
                    default:
                        deadline['ETH'] = VALUE;
                        deadline['ALGO'] = VALUE * 10;
                        deadline['CFX'] = VALUE * 100;
                        break;
                }

                return deadline;
            };

            setDeadline(makeDeadline({})[reach.connect]);
            const ctc = user.account.contract(backend);
            setViews({ view: "Deploying" });
            ctc.p.Deployer(DeployerInteract);
            const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2);
            console.log(ctcInfoStr);
            // The contract string should at this point be sent to a server for safe keeping to be attached to at a later date on a random user's device
            setContract({ ctcInfoStr });
            setViews({ view: "Confirmed" });
        };

        setViews({ view: "Loading" });
        await proposalSetup();
    };

    const attach = async (ctcInfoStr) => {
        try {
            const ctc = user.account.contract(backend, JSON.parse(ctcInfoStr));
            setViews({ view: "Attaching", wrapper: "AttacherWrapper" });
            ctc.p.Attacher(AttacherInteract);
        } catch (error) {
            console.log({ error });
        }
    };

    const connectAndContribute = async () => {
        try {
            await user.account.tokenAccept(tokenID);
            setViews({ view: "Loading", wrapper: 'ProposalWrapper' });
            const ctc = user.account.contract(backend, JSON.parse(contract));
            setViews({ view: 'Contribute', wrapper: 'ProposalWrapper' });
            return await new Promise(resolveContribution => {
                setResolveContribution({ resolveContribution });
                ctc.apis.Contributor.contribute(contribution);
                setViews({ views: 'PendingConfirmation', wrapper: 'ProposalWrapper' });
            });
        } catch (error) {
            console.log({ error });
        }
    };

    const makeContribution = async (x) => {
        setContribution(x);
    };

    const confirmContribution = async () => {
        resolveContribution.resolveContribution();
        setViews({ views: 'Confirmed', wrapper: 'ProposalWrapper' });
    };

    const DeployerInteract = {
        ...commonInteract,
        deadline,
    };

    const AttacherInteract = {
        ...commonInteract,
    };

    const ReachContextValues = {
        ...defaults,

        contract,
        deadline,

        // Accounts
        user,
        views,
        setViews,
        fundAccount,
        connectAccount,
        skipFundAccount,
        tokenID,
        setTokenID,
        tokenSupply,
        setTokenSupply,
        deploy,

        // Participants
        selectDeployer,
        selectAttacher,

        // Deployer
        stake,



        // Attacher  
        attach,
        makeProposal,
        // termsAccepted, implement a mutual agreement window

        // API
        connectAndContribute,
        makeContribution,
        confirmContribution,
    };

    return (
        <ReachContext.Provider values={ ReachContextValues }>
            { children }
        </ReachContext.Provider>
    );
};

export default ReachContextProvider;

// Still in progress....