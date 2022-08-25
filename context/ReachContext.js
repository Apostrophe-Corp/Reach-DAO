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
    const [proposals, setProposals] = useState([]);

    /**
     * Sorts an array of objects by a property present one level deep, in any object in the array. If successful, returns the sorted array of objects, else the original array is returned.
     * @param {Array<Object>} arrayOfObjects The array of objects to be sorted
     * @param {String} property The name of the property to be sorted by.
     * @returns {Array<Object>} A sorted array of objects, if sorting was successful, otherwise returns the original array.
     */
    const sortArrayOfObjects = (arrayOfObjects, property) => {
        if (!arrayOfObjects) return arrayOfObjects;
        if (!Array.isArray(arrayOfObjects)) return arrayOfObjects;
        if (arrayOfObjects.length <= 1) return arrayOfObjects;
        let isInt = false;
        return arrayOfObjects.map((el, index) => {
            isInt = !isNaN(el?.[property]);
            return !isInt ?
                `${el?.[property]?.[0]?.toUpperCase()?.concat(el?.[property]?.slice(1))}^-.-^${index}` :
                `${el?.[property]}^-.-^${index}`;
        })?.sort(isInt ? (a, b) => Number(a?.split('^-.-^')?.[0]) - Number(b?.split('^-.-^')?.[0]) : undefined)?.map(el => arrayOfObjects[el?.split('^-.-^')?.[1]]);
    };

    /**
     * It should return the bare string value without null characters
     * @param {String} byte A string padded with null values
     * @returns {String} A bare string without null characters
     */
    const noneNull = (byte) => {
        let string = '', i = 0;
        for (i; i < byte.length; i++) {
            if (String(byte[i]) !== String("\u0000")) {
                string += byte[i];
            }
        }
        return string;
    };

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

    const selectAttacher = () => {
        setViews({ view: "Attach", wrapper: "AttacherWrapper" });
    };

    const selectDeployer = () => {
        setViews({ view: "Deploy", wrapper: "DeployerWrapper" });
    };


    // TODO create a function to add to the Map of proposals stored in our contract;
    const updateProposals = ({ when, what }) => {
        setProposals([...proposals, {
            id: parseInt(what[0]),
            title: noneNull(what[1]),
            link: noneNull(what[2]),
            description: noneNull(what[3]),
            owner: noneNull(what[4]),
            contract: noneNull(what[5]),
            upvotes: 0,
            downvotes: 0,
            contribs: 0,
            timedOut: false,
            didPass: false,
        }]);
        console.log(noneNull(what[5]));
    };

    const timeoutProposal = ({ when, what }) => {
        const ifState = x => x.padEnd(20, "\u0000");
        switch (what[0]) {
            case ifState('passed'):
                const passedProposal = proposals.filter(el => Number(el.id) === Number(parseInt(what[1])))[0];
                passedProposal['timedOut'] = true;
                passedProposal['didPass'] = true;
                setProposals([...proposals.filter(el => Number(el.id) !== Number(parseInt(what[1]))), passedProposal]);
                break;
            case ifState('failed'):
                const failedProposal = proposals.filter(el => Number(el.id) === Number(parseInt(what[1])))[0];
                failedProposal['timedOut'] = true;
                failedProposal['didPass'] = false;
                setProposals([...proposals.filter(el => Number(el.id) !== Number(parseInt(what[1]))), failedProposal]);
                break;
            default:
                alert('Unhandled error..');
                break;
        }
    };

    const attach = async (ctcInfoStr) => {
        try {
            setViews({ view: "Attaching", wrapper: "AttacherWrapper" });
            const ctc = user.account.contract(backend, JSON.parse(ctcInfoStr));
            setContract({ ctcInfoStr });
            setViews({ view: "Proposals", wrapper: "ProposalWrapper" });
        } catch (error) {
            console.log({ error });
        }
    };

    // TODO implement the logic to send a contribution, positive or negative
    const connectAndUpvote = async (id, ctcInfoStr) => {
        try {
            const ctc = user.account.contract(backend, JSON.parse(ctcInfoStr));
            const upvotes = await ctc.apis.Voters.upvote();
            const proposal = proposals.filter(el => Number(el.id) === Number(id))[0];
            proposal.upvotes = parseInt(upvotes);
            setProposals([...proposals.filter(el => Number(el.id) !== Number(id)), proposal]);
        } catch (error) {
            console.log({ error });
        }
    };

    const connectAndDownvote = async (id, ctcInfoStr) => {
        try {
            const ctc = user.account.contract(backend, JSON.parse(ctcInfoStr));
            const downvotes = await ctc.apis.Voters.downvote();
            const proposal = proposals.filter(el => Number(el.id) === Number(id))[0];
            proposal.downvotes = parseInt(downvotes);
            setProposals([...proposals.filter(el => Number(el.id) !== Number(id)), proposal]);
        } catch (error) {
            console.log({ error });
        }
    };

    // TODO figure out the use of this later
    const makeContribution = async (amount, id, ctcInfoStr) => {
        try {
            const ctc = user.account.contract(backend, JSON.parse(ctcInfoStr));
            const contribs = await ctc.apis.Voters.contribute(reach.parseCurrency(amount));
            const proposal = proposals.filter(el => Number(el.id) === Number(id))[0];
            proposal.contribs = reach.formatCurrency(contribs, 4);
            setProposals([...proposals.filter(el => Number(el.id) !== Number(id)), proposal]);
        } catch (error) {
            console.log({ error });
        }
    };

    const connectAndClaimRefund = async (ctcInfoStr) => {
        try {
            const ctc = user.account.contract(backend, JSON.parse(ctcInfoStr));
            const didRefund = await ctc.apis.Voters.claimRefund();
            if (didRefund) {
                alert('Refund Success');
            } else {
                alert("It seems you don't have funds to claim, did you contribute to this proposal?");
            }
        } catch (error) {
            console.log({ error });
        }
    };

    const confirmContribution = async () => {
        setViews({ views: 'Confirmed', wrapper: 'ProposalWrapper' });
    };

    const getProposal = {
        id: 1,
        title: 'AroTable',
        link: 'https://github.com/Aro1914/AroTable/blob/main/README.md',
        description: `A self-sorting number data structure`,
        owner: user.account,
    };

    const DeployerInteract = {
        getProposal,
        deadline,
        numMembers: 5,
        isProposal: false,
    };

    const deploy = async () => {
        setViews({ view: "Deploying", wrapper: "DeployerWrapper" });
        const ctc = user.account.contract(backend);
        setContractInstance(ctc);
        console.log('Got here');
        const getContract = () => {
            return contract?.ctcInfoStr;
        };
        const interact = {
            ...DeployerInteract,
            getContract,
        };
        ctc.p.Deployer(interact);
        const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2);
        setContract({ ctcInfoStr });
        console.log(ctcInfoStr);
        setViews({ view: "Deployed", wrapper: "DeployerWrapper" });
    };

    const makeProposal = async (proposal) => {
        const proposalSetup = async () => {
            // TODO implement the interact functionality
            const deadline = { ETH: 1000, ALGO: 10000, CFX: 100000 }[reach.connector];
            const ctc = user.account.contract(backend);
            let ctcInfo = '';
            const getContract = () => {
                return ctcInfo;
            };
            ctc.p.Deployer({
                getProposal: {
                    ...proposal,
                },
                deadline: deadline,
                numMembers: 5,
                isProposal: true,
                getContract,
            });
            ctcInfo = JSON.stringify(await ctc.getInfo(), null, 2);
            console.log(ctcInfo);
            ctc.events.log.monitor(timeoutProposal);
            ctc.events.created.monitor(updateProposals);
            // The contract string should at this point be sent to a server for safe keeping to be attached to at a later date on a random user's device
            return ctcInfo;
        };
        const contract = await proposalSetup();
        return contract;
    };

    const ReachContextValues = {
        ...defaults,

        // Views
        views,
        setViews,

        // Misc
        contract,
        deadline,
        sortArrayOfObjects,

        // Accounts
        user,
        connectAccount,
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
        setContract,
        makeContribution,
        connectAndUpvote,
        connectAndDownvote,
        connectAndClaimRefund,
        updateProposals,
        confirmContribution,

        // Proposals
        proposals,
        setProposals,
    };

    return (
        <ReachContext.Provider value={ ReachContextValues }>
            <div className={ fmtClasses(styles.header, !contract?.ctcInfoStr ? styles.itemsCenter : '') }>
                <div className={ fmtClasses(styles.brandContainer) }>
                    <h1>Reach DAO</h1>
                </div>
                <div className={ fmtClasses(styles.navContainer) }>
                    { contract?.ctcInfoStr &&
                        <ul className={ fmtClasses(styles.navList, styles.flat) }>
                            <li className={ fmtClasses(views.view === 'InfoCenter' ? styles.navItemActive : styles.navItem) }>Info Center</li>
                            <li className={ fmtClasses(views.view === 'Proposals' ? styles.navItemActive : styles.navItem) } onClick={ () => setViews({ view: 'Proposals', wrapper: 'ProposalWrapper' }) }>Proposals</li>
                            <li className={ fmtClasses(views.view === 'Bounties' ? styles.navItemActive : styles.navItem) }>Bounties</li>
                        </ul> }
                </div>
            </div>
            <div className={ fmtClasses(styles.childrenContainer) } id="root">{ children }</div>
        </ReachContext.Provider>
    );
};

export default ReachContextProvider;

// Still in progress....