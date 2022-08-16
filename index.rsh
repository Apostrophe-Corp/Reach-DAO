/* eslint-disable eqeqeq */
/* eslint-disable no-undef */
'reach 0.1';

const [isOutcome, NOT_PASSED, PASSED] = makeEnum(2);

const DEADLINE = 10;

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

const common = {
    seeOutcome: Fun([UInt, UInt], Null),
    informTimeout: Fun([], Null),
    numMembers: UInt,
};

export const main = Reach.App(() => {
    const Deployer = Participant('Deployer', {
        ...common,
        // interact interface here
    });

    const Proposers = API('Proposers', {
        makeProposal: Fun([Object({
            title: Bytes(48),
            link: Bytes(128),
            description: Bytes(200),
            owner: Bytes(128),
            contract: Contract,
        })], Bool)
    });

    /**
     *  const Proposers = API('Proposers', {
        makeProposal: Fun([Object({
            title: Bytes(48),
            link: Bytes(128),
            description: Bytes(200),
            owner: Bytes(128),
            contract: Contract,
        })], Bool)
    });
     */
    
    const Voters = API('Voters', {
        vote: Fun([Bool], Bool),
        // interact interface 
    });
    init();

    Deployer.publish();

    const count = parallelReduce(0)
        .invariant(balance() == 0)
        .while(true)
        .api(Voters.vote, (truthy, notify) => {
            notify(true);
            return count;
        })
        .api(Proposers.makeProposal, (object, notify) => {
            notify(true);
            return count;
        });

    commit();

});

