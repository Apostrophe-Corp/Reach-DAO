import { loadStdlib, ask } from "@reach-sh/stdlib";
import * as backend from "./build/index.main.mjs";
const reach = loadStdlib();

/**
 * Necessary functionalities
 */

let user = {};
let contractInstance = null;
let contract = {};
let proposals = [];
let bounties = [];
let views = {};

const connectAccount = async () => {
    const createAcc = await ask.ask(
        `Would you like to create an account? (Only available on DevNet)`,
        ask.yesno
    );

    if (createAcc) {
        const account = await reach.newTestAccount(reach.parseCurrency(1000));
        const balAtomic = await reach.balanceOf(account);
        const balance = reach.formatCurrency(balAtomic, 4);
        user = {
            account,
            balance
        };
    } else {
        const secret = await ask.ask(
            `What is your account secret?`,
            (x => x)
        );
        const account = await reach.newAccountFromSecret(secret);
        const balAtomic = await reach.balanceOf(account);
        const balance = reach.formatCurrency(balAtomic, 4);
        user = {
            account,
            balance
        };
    }
    setRole();
};

const setRole = () => {
    console.clear();
    const isDeployer = await ask.ask(
        'Are you the Admin? [y/n]',
        ask.yesno
    );

    if (isDeployer) {
        console.clear();
        console.log('Welcome Admin');
        const shouldDeploy = await ask.ask(
            `Enter 'y' to proceed with deployment, 'n' to abort`,
            ask.yesno
        );
        if (shouldDeploy) {
            deploy();
        } else {
            setRole();
        }
    } else {
        console.log('Hello Attacher');
        const info = await ask.ask(
            'Please enter the contract information',
            attach
        );
    }
};

const attach = async (ctcInfoStr) => {
    console.clear();
    try {
        console.log('[..] Attaching');
        const ctc = user.account.contract(backend, JSON.parse(ctcInfoStr));
        contractInstance = ctc;
        contract = { ctcInfoStr };
        ctc.events.create.monitor(createProposal);
        ctc.events.that.monitor(acknowledge);
        // TODO show the General CV
        // setViews({ view: "InfoCenter", wrapper: "InfoWrapper" });
    } catch (error) {
        console.log({ error });
    }
};

const connectAndUpvote = async (id, ctcInfoStr) => {
    try {
        const ctc = user.account.contract(backend, JSON.parse(ctcInfoStr));
        const upvotes = await ctc.apis.Voters.upvote();
        await contractInstance.apis.Voters.upvoted(id, parseInt(upvotes));
    } catch (error) {
        console.log({ error });
    }
};

const connectAndDownvote = async (id, ctcInfoStr) => {
    try {
        const ctc = user.account.contract(backend, JSON.parse(ctcInfoStr));
        const downvotes = await ctc.apis.Voters.downvote();
        await contractInstance.apis.Voters.downvoted(id, parseInt(downvotes));
    } catch (error) {
        console.log({ error });
    }
};

const makeContribution = async (amount, id, ctcInfoStr) => {
    try {
        const ctc = user.account.contract(backend, JSON.parse(ctcInfoStr));
        const contribs = await ctc.apis.Voters.contribute(reach.parseCurrency(amount));
        await contractInstance.apis.Voters.contributed(id, parseInt(contribs));
    } catch (error) {
        console.log({ error });
    }
};

const connectAndClaimRefund = async (ctcInfoStr) => {
    try {
        const ctc = user.account.contract(backend, JSON.parse(ctcInfoStr));
        const didRefund = await ctc.apis.Voters.claimRefund();
        if (didRefund) {
            console.log("[✔] Refund Success");
        } else {
            console.log("[‼] It seems you don't have funds to claim, did you contribute to this proposal?");
        }
    } catch (error) {
        console.log({ error });
    }
};

const DeployerInteract = {
    getProposal: {
        id: 1,
        title: 'AroTable',
        link: 'https://github.com/Aro1914/AroTable/blob/main/README.md',
        description: `A self-sorting number data structure`,
        owner: user.account,
        deadline,
        isProposal: false,
    },
};

const updateProposals = async ({ when, what }) => {
    await contractInstance.apis.Voters.created({
        id: parseInt(what[0]),
        title: noneNull(what[1]),
        link: noneNull(what[2]),
        description: noneNull(what[3]),
        owner: noneNull(what[4]),
        contractInfo: what[5],
    });
    console.log(what[5]);
};

const createProposal = ({ when, what }) => {
    proposals.push({
        id: parseInt(what[0]),
        title: noneNull(what[1]),
        link: noneNull(what[2]),
        description: noneNull(what[3]),
        owner: noneNull(what[4]),
        contract: JSON.stringify(what[5]),
        upvotes: 0,
        downvotes: 0,
        contribs: 0,
        timedOut: false,
        didPass: false,
        isDown: false,
    });
    // console.log(what[5]);
};

const acknowledge = async ({ when, what }) => {
    const ifState = x => x.padEnd(20, '\u0000');
    switch (what[0]) {
        case ifState('upvoted'):
            const upProposals = proposals.map(el => {
                if (Number(el.id) === Number(parseInt(what[1]))) {
                    el['upvotes'] = parseInt(what[2]);
                }
                return el;
            });
            proposals = upProposals;
            break;
        case ifState('downvoted'):
            const downProposals = proposals.map(el => {
                if (Number(el.id) === Number(parseInt(what[1]))) {
                    el['downvotes'] = parseInt(what[2]);
                }
                return el;
            });
            proposals = downProposals;
            break;
        case ifState('contributed'):
            const conProposals = proposals.map(el => {
                if (Number(el.id) === Number(parseInt(what[1]))) {
                    el['contribs'] = reach.formatCurrency(what[2], 4);
                }
                return el;
            });
            proposals = conProposals;
            break;
        case ifState('timedOut'):
            // Take it to the Bounties view, drop from the proposal view
            if (parseInt(what[2])) {
                const nBounty = proposals.filter(el => Number(el.id) === Number(parseInt(what[1])))[0];
                bounties.push(nBounty);

                const xXProposals = proposals.filter(el => Number(el.id) !== Number(parseInt(what[1])));
                proposals = xXProposals;
                // Take it the list of timed out proposals and remove it from the main list of proposals
            } else {
                const fProposals = proposals.map(el => {
                    if (Number(el.id) === Number(parseInt(what[1]))) {
                        el['timedOut'] = true;
                        el['didPass'] = false;
                    }
                    return el;
                });
                proposals = fProposals;
            }
            break;
        case ifState('projectDown'):
            const remainingProposals = proposals.filter(el => {
                if (Number(el.id) === Number(parseInt(what[1]))) {
                    el['isDown'] = true;
                }
                return Number(el.id) !== Number(parseInt(what[1]));
            });
            proposals = remainingProposals;
            break;
        default:
            break;
    }
};

const timeoutProposal = async ({ when, what }) => {
    const ifState = x => x.padEnd(20, "\u0000");
    switch (what[0]) {
        case ifState('passed'):
            await contractInstance.apis.Voters.timedOut(parseInt(what[1]), 1);
            break;
        case ifState('failed'):
            await contractInstance.apis.Voters.timedOut(parseInt(what[1]), 0);
            break;
        case ifState('down'):
            await contractInstance.apis.Voters.projectDown(parseInt(what[1]));
            break;
        default:
            break;
    }
};

const deploy = async () => {
    console.clear();
    console.log('[..] Deploying');
    const ctc = user.account.contract(backend);
    contractInstance = ctc;
    console.log('Got here');
    const interact = {
        ...DeployerInteract,
    };
    ctc.p.Deployer(interact);
    const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2);
    ctc.events.create.monitor(createProposal);
    ctc.events.that.monitor(acknowledge);
    contract = { ctcInfoStr };
    console.clear();
    console.log(`[✔] Deployed`);
    console.group(`Here is the contract information`);
    console.log(`${contract.ctcInfoStr}`);
    console.groupEnd(`Here is the contract information`);
};

const makeProposal = async (proposal) => {
    const proposalSetup = async () => {
        const deadline = { ETH: 5, ALGO: 50, CFX: 500 }[reach.connector];
        const ctc = user.account.contract(backend);
        ctc.p.Deployer({
            getProposal: {
                ...proposal,
                deadline: deadline,
                isProposal: true,
            }
        });
        ctc.events.log.monitor(timeoutProposal);
        ctc.events.created.monitor(updateProposals);
    };
    await proposalSetup();
};

/**
 * End of declarations 
 */

const showInfoCenter = () => {
    console.clear();

    console.log(`Reach DAO by Team 18`);
    console.group(`Info Center`);
    console.log(`Welcome! To the new Hub!`);
    console.groupEnd(`Info Center`);

    const respondTo = (request) => {
        switch (request) {
            case 1:
                showProposals();
                break;
            case 2:
                showBounties();
                break;
            case 3:
                setRole();
                break;
            case 0:
                process.exit(0);
                break;
            default:
                break;
        }
    };

    const userInput = await ask.ask(
        `[+] Console Menu\n
        1. View Proposals\n
        2. View Bounties\n
        3. Back to Select Roles\n
        0. Exit Application`,
        input => Number(input)
    );

    respondTo(userInput);
};

const showProposals = () => {
    console.clear();

    console.log(`Reach DAO by Team 18`);
    console.group(`Proposals`);
    console.log(`Get the chance to bring your ideas to life!`);
    console.groupEnd(`Proposals`);

    const respondTo = (request) => {
        switch (request) {
            case 1:
                showBounties();
                break;
            case 2:
                showInfoCenter();
                break;
            case 3:
                setRole();
                break;
            case 0:
                process.exit(0);
                break;
            default:
                break;
        }
    };

    const userInput = await ask.ask(
        `[+] Console Menu\n
        1. View Bounties\n
        2. View Info Center\n
        3. Back to Select Roles\n
        0. Exit Application`,
        input => Number(input)
    );

    respondTo(userInput);
};

process.exit(0);