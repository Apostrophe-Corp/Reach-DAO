/* eslint-disable no-use-before-define */
/* eslint-disable eqeqeq */
/* eslint-disable no-undef */
'reach 0.1';

const [isOutcome, NOT_PASSED, PASSED] = makeEnum(2);

const fromMap = (m) => fromMaybe(m, (() => 0), ((x) => x));

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
    const Deployer = Participant('Deployer', {
        numMembers: UInt,
        getProposal: Object({
            title: Bytes(48),
            link: Bytes(128),
            description: Bytes(200),
            owner: Address,
            contract: Contract,
            deadline: UInt,
        }),
        projectPassed: Fun([], Null),
        projectNotPassed: Fun([], Null),
        // interact interface here
    });

    const Voters = API('Voters', {
        upvote: Fun([], Null),
        downvote: Fun([], Null),
        contribute: Fun([UInt], Null),
        // interact interface 
    });
    init();

    Deployer.only(() => {
        const proposal = declassify(interact.getProposal);
        const numMembers = declassify(interact.numMembers);
    });
    Deployer.publish(proposal, numMembers);
    commit();

    Deployer.publish();
    const contributors = new Map(UInt, Object({
        address: Address,
        amt: UInt,
    }));


    const end = lastConsensusTime() + proposal.deadline;

    const [
        upvote,
        downvote,
        count,
        amtTotal
    ] = parallelReduce([0, 0, 0, 0])
        .invariant(balance() == amtTotal)
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
                contributors[count] = { address: this, amt: amt };
                return [upvote, downvote, count + 1, amtTotal + amt];
            }];
        })
        .timeout(absoluteTime(end), () => {
            Deployer.publish();
            if (checkStatus(numMembers, upvote, downvote) == PASSED) {
                transfer(balance()).to(proposal.owner);
                Deployer.interact.projectPassed();
            } else {
                Deployer.interact.projectNotPassed();
                var [newCount, currentBalance] = [count, balance()];
                invariant(balance() == currentBalance);
                while (newCount > 0) {
                    commit();
                    const { address, amt } = fromMap(contributors[newCount]);
                    Deployer.publish();
                    transfer(amt).to(address);
                    [newCount, currentBalance] = [newCount - 1, balance()];
                    continue;
                }
            }
        });
});


