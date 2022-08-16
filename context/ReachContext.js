import React, { useState } from "react";
import {
    loadStdlib,
    ALGO_MyAlgoConnect as MyAlgoConnect
} from "@reach-sh/stdlib";
import * as backend from "../build/index.main.mjs";
import { fmtClasses } from "../hooks/fmtClasses";
import styles from "../styles/MainWrapper.module.css";

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
    const [contractInstance, setContractInstance] = useState(null);
    const [deadline, setDeadline] = useState(defaultDeadline);
    const [proposals, setProposals] = useState([
        {
            id: 1,
            title: 'Proposal 1',
            link: 'https://github.com/Aro1914/AroTable/blob/main/README.md',
            description: `A self-sorting number data structure`,
            owner: 'https://github.com/Aro1914',
            contract: "someContractString",
        },
        {
            id: 2,
            title: 'Proposal 2',
            link: 'https://github.com/Aro1914/Coffee-Shop/blob/main/README.md',
            description: `Not your regular coffee shop`,
            owner: 'https://github.com/Aro1914',
            contract: "someContractString",
        },
        {
            id: 3,
            title: 'Proposal 3',
            link: 'https://github.com/Aro1914/Trivia-API/blob/main/README.md',
            description: `A quiz API`,
            owner: 'https://github.com/Aro1914',
            contract: "someContractString",
        },
        {
            id: 4,
            title: 'Proposal 4',
            link: 'https://github.com/Aro1914/Fyyur-Project/blob/main/README.md',
            description: `A platform for musical artists to book musical venues`,
            owner: 'https://github.com/Aro1914',
            contract: "someContractString",
        },
        {
            id: 5,
            title: 'Proposal 5',
            link: 'https://github.com/Aro1914/Rock-Paper-Scissors-with-Reach/blob/main/README.md',
            description: `An implementation of the fun but sometimes intense game of Rock, Paper, Scissors`,
            owner: 'https://github.com/Aro1914',
            contract: "someContractString",
        },
        {
            id: 6,
            title: 'Proposal 6',
            link: 'https://github.com/AroTable-For-Server-Side/AroTable/blob/main/README.md',
            description: `A self-sorting number data structure (For Server Side)`,
            owner: 'https://github.com/Aro1914',
            contract: "someContractString",
        },
    ]);

    const connectAccount = async () => {
        const account = await reach.getDefaultAccount();
        const balAtomic = await reach.balanceOf(account);
        const balance = reach.formatCurrency(balAtomic, 4);
        setUser({
            account,
            balance
        });
        setViews({ view: "DeployerOrAttacher", wrapper: "AppWrapper" });
    };

    const fundAccount = async (fundAmount) => {
        await reach.fundFromFaucet(user.account, reach.parseCurrency(fundAmount ?? defaults.defaultFundAmt));
        setViews({ view: "DeployerOrAttacher", wrapper: "AppWrapper" });
    };

    const skipFundAccount = async () => {
        setViews({ view: "DeployerOrAttacher", wrapper: "AppWrapper" });
    };

    const selectAttacher = () => {
        setViews({ view: "Attach", wrapper: "AttacherWrapper" });
    };

    const selectDeployer = () => {
        setViews({ view: "Deploy", wrapper: "DeployerWrapper" });
    };

    const commonInteract = {
        ...reach.hasRandom
    };

    const deploy = async () => {
        setViews({ view: "Deploying", wrapper: "DeployerWrapper" });
        const ctc = user.account.contract(backend);
        setContractInstance(ctc);
        setViews({ ...views, view: "Deploying" });
        ctc.p.Deployer(DeployerInteract);
        const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2);
        console.log(ctcInfoStr);
        setContract({ ctcInfoStr });
        setViews({ ...views, view: "Deployed" });
    };

    // TODO create a function to add to the Map of proposals stored in our contract;
    const updateProposals = () => {
    };

    // const timeoutProposal () => {
    // This will delete the timeoutProposal from the database or global state
    // }

    const attach = async (ctcInfoStr) => {
        try {
            const ctc = user.account.contract(backend, JSON.parse(ctcInfoStr));
            setViews({ view: "Attaching", wrapper: "AttacherWrapper" });
            ctc.p.Attacher(AttacherInteract);
        } catch (error) {
            console.log({ error });
        }
    };

    // TODO implement the logic to send a contribution, positive or negative
    const connectAndUpvote = async (ctcInfoStr) => {
        try {
            const ctc = user.account.contract(backend, JSON.parse(ctcInfoStr));
            ctc.apis.Voter.upvote();
        } catch (error) {
            console.log({ error });
        }
    };

    const connectAndDownvote = async (ctcInfoStr) => {
        try {
            const ctc = user.account.contract(backend, JSON.parse(ctcInfoStr));
            ctc.apis.Voter.downvote();
        } catch (error) {
            console.log({ error });
        }
    };

    // TODO figure out the use of this later
    const makeContribution = async (x) => {
        // 
    };

    const confirmContribution = async () => {
        setViews({ views: 'Confirmed', wrapper: 'ProposalWrapper' });
    };

    const DeployerInteract = {
        ...commonInteract,
        deadline,
        getProposal: () => {
            // TODO
            // return an Object;
        }
    };

    const makeProposal = async () => {
        const proposalSetup = async () => {
            // TODO implement the interact functionality
            /**
             * Plans to set a deadline for a proposal upon creation
             * Although it may seem a deadline is would be kinda tricky to implement
             * */
            const deadline = { ETH: 1000, ALGO: 10000, CFX: 100000 }[reach.connector];
            const ctc = user.account.contract(backend);
            setViews({ view: "Deploying", wrapper: "ProposalWrapper" });
            ctc.p.Deployer({ ...DeployerInteract, deadline: deadline });
            const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2);
            console.log(ctcInfoStr);
            // The contract string should at this point be sent to a server for safe keeping to be attached to at a later date on a random user's device
            setContract({ ctcInfoStr });
            setViews({ ...views, view: "Confirmed" });
            return ctcInfoStr;
        };

        setViews({ ...views, view: "Loading" });
        await proposalSetup();
    };

    const AttacherInteract = {
        ...commonInteract,
    };

    const ReachContextValues = {
        ...defaults,

        // Views
        views,
        setViews,

        // Misc
        contract,
        deadline,

        // Accounts
        user,
        fundAccount,
        connectAccount,
        skipFundAccount,
        deploy,

        // Participants
        selectDeployer,
        selectAttacher,

        // Deployer

        // timeoutProposal

        // Attacher  
        attach,
        makeProposal,

        // API
        // connectAndContribute,
        makeContribution,
        updateProposals,

        // Proposals
        proposals,
        setProposals,
    };

    return (
        <ReachContext.Provider value={ ReachContextValues }>
            <div className={ fmtClasses(styles.header) }>
                <div className={ fmtClasses(styles.brandContainer) }>
                    <h1>Reach DAO</h1>
                </div>
                <div className={ fmtClasses(styles.navContainer) }>
                    { contract?.ctcInfoStr &&
                        <ul className={ fmtClasses(styles.navList, styles.flat) }>
                            <li className={ fmtClasses(styles.navItem) }>Info Center</li>
                            <li className={ fmtClasses(styles.navItem) } onClick={()=>setViews({view: 'Proposals', wrapper: 'ProposalWrapper'})}>Proposals</li>
                            <li className={ fmtClasses(styles.navItem) }>Bounties</li>
                        </ul> }
                </div>
            </div>
            <div className={ fmtClasses(styles.childrenContainer) } id="root">{ children }</div>
        </ReachContext.Provider>
    );
};

export default ReachContextProvider;

// Still in progress....