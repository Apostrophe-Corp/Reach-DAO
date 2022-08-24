/* eslint-disable no-use-before-define */
/* eslint-disable eqeqeq */
/* eslint-disable no-undef */
'reach 0.1';

const [isOutcome, NOT_PASSED, PASSED] = makeEnum(2);

const getDataFromMaybe = m => fromMaybe(m, (() => null), ((x) => x));

const checkStatus = (numMembers, upVotes, downVotes) => {
    const result = downVotes > ((numMembers / 100) * 40) ? NOT_PASSED :
        (upVotes > downVotes) && (upVotes >= ((numMembers / 100) * 40)) ? PASSED :
            upVotes >= ((numMembers / 100) * 60) ? PASSED :
                NOT_PASSED;
    return result;
};

assert(checkStatus(100, 30, 45) == NOT_PASSED);
assert(checkStatus(100, 0, 0) == NOT_PASSED);
assert(checkStatus(100, 35, 30) == NOT_PASSED);
assert(checkStatus(100, 60, 40) == PASSED);
assert(checkStatus(100, 40, 30) == PASSED);

forall(UInt, numMembers =>
    forall(UInt, upVotes =>
        forall(UInt, downVotes =>
            assert(isOutcome(checkStatus(numMembers, upVotes, downVotes))))));

export const main = Reach.App(() => {
    setOptions({ untrustworthyMaps: true });
    const Deployer = Participant('Deployer', {
        numMembers: UInt,
        // getProposal: Object({
        //     title: Bytes(48),
        //     link: Bytes(128),
        //     description: Bytes(200),
        //     owner: Address,
        //     contract: Contract,
        //     deadline: UInt,
        // }),
        projectPassed: Fun([], Null),
        projectNotPassed: Fun([], Null),
        cashOut: Fun([], Null),
        reFund: Fun([], Null),
        // interact interface here
    });

    const Voters = API('Voters', {
        upvote: Fun([], Null),
        downvote: Fun([], Null),
        contribute: Fun([UInt], Null),
        // interact interface 
    });

    const Creator = API('Creator', {
        refund: Fun([], Null),
        cashOut: Fun([], Null),
    });

    const Balance = View({
        currentBalance: UInt,
    });

    init();

    Deployer.only(() => {
        // const proposal = declassify(interact.getProposal);
        const numMembers = declassify(interact.numMembers);
    });
    // Deployer.publish(proposal, numMembers);
    Deployer.publish(numMembers);
    commit();

    Deployer.publish();
    const contributors = new Map(Address, Object({
        address: Address,
        amt: UInt,
    }));

    // const end = lastConsensusTime() + proposal.deadline;
    const end = lastConsensusTime() + 29;

    const [
        upvote,
        downvote,
        count,
        amtTotal
    ] = parallelReduce([0, 0, 0, balance()])
        .define(() => {
            Balance.currentBalance.set(amtTotal);
        })
        .invariant(balance() == balance())
        .while(lastConsensusTime() <= end)
        .api(Voters.upvote, (notify) => {
            notify(null);
            return [upvote + 1, downvote, count, amtTotal];
        })
        .api(Voters.downvote, (notify) => {
            notify(null);
            return [upvote, downvote + 1, count, amtTotal];
        })
        .api_(Voters.contribute, (amt) => {
            return [amt, (notify) => {
                notify(null);
                contributors[this] = { address: this, amt: amt };
                return [upvote, downvote, count + 1, balance()];
            }];
        })
        .timeout(absoluteTime(end), () => {
            Deployer.publish();
            if (checkStatus(numMembers, upvote, downvote) == PASSED) {
                Deployer.interact.cashOut();
            } else {
                Deployer.interact.reFund();
            }
            return [upvote, downvote, count, amtTotal];
        });
    transfer(balance()).to(Deployer);

    const [
        isEnd
    ] = parallelReduce([false])
        .invariant(balance() >= 0)
        .while(!isEnd)
        .api(Creator.cashOut, (notify) => {
            notify(null);
            transfer(balance()).to(Deployer);
            Deployer.interact.projectPassed();
            return [true];
        })
        .api(Creator.refund, (notify) => {
            notify(null);
            var [newCount, object] = [count, getDataFromMaybe(contributors[Deployer])];
            invariant(balance() >= 0);
            while (newCount > 0) {
                commit();
                Deployer.publish();
                const { address, amt } = contributors[this];
                transfer(object.amt).to(object.address);
                [newCount, object] = [newCount - 1, getDataFromMaybe(contributors[this])];
                continue;
            }
            Deployer.interact.projectNotPassed();
            return [true];
        });

    commit();
});


