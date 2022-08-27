/* eslint-disable no-array-constructor */
/* eslint-disable no-use-before-define */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
'reach 0.1';

const [isOutcome, NOT_PASSED, PASSED] = makeEnum(2);

const DEADLINE = 20;

const state = Bytes(20);

// We no longer need the numMembers, please reflect the change
const checkStatus = (upVotes, downVotes) => {
    // If the down votes are greater than the up votes after the timeout then the project failed
    if (downVotes > upVotes) {
        return NOT_PASSED;
    } else if (upVotes == downVotes) {
        return NOT_PASSED
    } else {
        return PASSED
    }
};

assert(checkStatus(100, 100) == NOT_PASSED);
assert(checkStatus(50, 100) == NOT_PASSED);
assert(checkStatus(100, 50) == PASSED);

// Result always be either PASSED or NOT_PASSED, nothing else
forall(UInt, upVotes =>
    forall(UInt, downVotes =>
        assert(isOutcome(checkStatus(upVotes, downVotes)))));

export const main = Reach.App(() => {
    setOptions({ untrustworthyMaps: true });
    const Deployer = Participant('Deployer', {
        getProposal: Object({
            id: UInt,
            title: Bytes(25),
            link: Bytes(150),
            description: Bytes(180),
            owner: Address,
            deadline: UInt,
            numMembers: UInt,
            isProposal: Bool,
        }),
    });

    const objectRep = Struct([
        ["id", UInt],
        ["title", Bytes(25)],
        ["link", Bytes(150)],
        ["description", Bytes(180)],
        ["owner", Address],
        ["contractInfo", Contract]
    ]);

    const Voters = API('Voters', {
        upvote: Fun([], UInt),
        downvote: Fun([], UInt),
        contribute: Fun([UInt], UInt),
        claimRefund: Fun([], Bool),
        created: Fun([objectRep], Null),
        upvoted: Fun([UInt, UInt], Null),
        downvoted: Fun([UInt, UInt], Null),
        contributed: Fun([UInt, UInt], Null),
        timedOut: Fun([UInt, UInt], Null),
        // interact interface 
    });

    const Proposals = Events({
        create: [UInt, Bytes(25), Bytes(150), Bytes(180), Address, Contract],
        that: [state, UInt, UInt],
        log: [state, UInt],
        created: [UInt, Bytes(25), Bytes(150), Bytes(180), Address, Contract],
    });
    init();
    Deployer.only(() => {
        const { title, link, description, owner, id, isProposal, numMembers, deadline } = declassify(interact.getProposal);
    });
    Deployer.publish(description, isProposal, numMembers);

    if (isProposal) {
        commit();
        Deployer.publish(title, link, owner, id, deadline);
        Proposals.created(id, title, link, description, owner, getContract());
        const end = lastConsensusTime() + deadline;
        const contributors = new Map(Address, Address);
        const amtContributed = new Map(Address, UInt);
        const contributorsSet = new Set();

        const [
            upvote,
            downvote,
            count,
            amtTotal,
            lastAddress,
        ] = parallelReduce([0, 0, 0, 0, Deployer])
            .invariant(balance() == amtTotal)
            .while(lastConsensusTime() <= end)
            .api(Voters.upvote, (notify) => {
                notify(upvote + 1);
                return [upvote + 1, downvote, count, amtTotal, lastAddress];
            })
            .api(Voters.downvote, (notify) => {
                notify(downvote + 1);
                return [upvote, downvote + 1, count, amtTotal, lastAddress];
            })
            .api_(Voters.contribute, (amt) => {
                check(amt > 0, "Contribution too small");
                const payment = amt;
                return [payment, (notify) => {
                    notify(balance());
                    if (contributorsSet.member(this)) {
                        const fromMapAmt = (m) => fromMaybe(m, (() => 0), ((x) => x));
                        amtContributed[this] = fromMapAmt(amtContributed[this]) + amt;
                    } else {
                        contributors[this] = this;
                        amtContributed[this] = amt;
                        contributorsSet.insert(this);
                    }
                    return [upvote, downvote, count + 1, amtTotal + amt, this];
                }];
            })
            .timeout(absoluteTime(end), () => {
                Deployer.publish();
                // Proposals.log(state.pad('timeout'), id);
                return [upvote, downvote, count, amtTotal, lastAddress];
            });

        if (checkStatus(upvote, downvote) == PASSED) {
            Proposals.log(state.pad('passed'), id);
            transfer(balance()).to(owner);
        }else {
            Proposals.log(state.pad('failed'), id);
            const fromMapAdd = (m) => fromMaybe(m, (() => lastAddress), ((x) => x));
            const fromMapAmt = (m) => fromMaybe(m, (() => 0), ((x) => x));
            commit();
            Deployer.publish();
            const [newCount, currentBalance] = parallelReduce([count, balance()])
                .invariant(balance() == currentBalance)
                .while(newCount > 0 && currentBalance > 0)
                .api(Voters.claimRefund, (notify => {
                    if (balance() >= fromMapAmt(amtContributed[this]) && contributorsSet.member(this)) {
                        transfer(fromMapAmt(amtContributed[this])).to(
                            fromMapAdd(contributors[this])
                        );
                        contributorsSet.remove(this);
                        Proposals.log(state.pad('refundPassed'), id);
                        notify(true);
                        return [newCount - 1, balance()];
                    } else {
                        Proposals.log(state.pad('refundFailed'), id);
                        notify(false);
                        return [newCount, balance()];
                    }
                }));
        }
        transfer(balance()).to(Deployer);
    } else {
        const keepGoing = parallelReduce(true)
            .invariant(balance() == 0)
            .while(keepGoing != false)
            .api(Voters.created, (obj, notify) => {
                notify(null);
                const proposalStruct = objectRep.fromObject(obj);
                const proposalObject = objectRep.toObject(proposalStruct);
                Proposals.create(
                    proposalObject.id,
                    proposalObject.title,
                    proposalObject.link,
                    proposalObject.description,
                    proposalObject.owner,
                    proposalObject.contractInfo
                );
                return keepGoing;
            })
            .api(Voters.upvoted, (fNum, sNum, notify) => {
                notify(null);
                const num1 = fNum;
                const num2 = sNum;
                Proposals.that(state.pad('upvoted'), num1, num2);
                return keepGoing;
            })
            .api(Voters.downvoted, (fNum, sNum, notify) => {
                notify(null);
                const num1 = fNum;
                const num2 = sNum;
                Proposals.that(state.pad('downvoted'), num1, num2);
                return keepGoing;
            })
            .api(Voters.contributed, (fNum, sNum, notify) => {
                notify(null);
                const num1 = fNum;
                const num2 = sNum;
                Proposals.that(state.pad('contributed'), num1, num2);
                return keepGoing;
            })
            .api(Voters.timedOut, (fNum, sNum, notify) => {
                notify(null);
                const num1 = fNum;
                const num2 = sNum;
                Proposals.that(state.pad('timedOut'), num1, num2);
                return keepGoing;
            });
    }
    commit();
});