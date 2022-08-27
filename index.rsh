/* eslint-disable no-array-constructor */
/* eslint-disable no-use-before-define */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
'reach 0.1';

const [isOutcome, NOT_PASSED, PASSED] = makeEnum(2);

const state = Bytes(20);

const checkStatus = (upVotes, downVotes) => {
    if (downVotes > upVotes) {
        return NOT_PASSED;
    } else if (upVotes == downVotes) {
        return NOT_PASSED;
    } else {
        return PASSED;
    }
};

assert(checkStatus(100, 100) == NOT_PASSED);
assert(checkStatus(50, 100) == NOT_PASSED);
assert(checkStatus(100, 50) == PASSED);

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
    });

    const Proposals = Events({
        create: [UInt, Bytes(25), Bytes(150), Bytes(180), Address, Contract],
        that: [state, UInt, UInt],
        log: [state, UInt],
        created: [UInt, Bytes(25), Bytes(150), Bytes(180), Address, Contract],
    });
    init();
    Deployer.only(() => {
        const { title, link, description, owner, id, isProposal, deadline } = declassify(interact.getProposal);
    });
    Deployer.publish(description, isProposal);

    if (isProposal) {
        commit();
        Deployer.publish(title, link, owner, id, deadline);
        Proposals.created(id, title, link, description, owner, getContract());
        const [timeRemaining, keepGoing] = makeDeadline(deadline);
        const contributors = new Map(Address, Address);
        const amtContributed = new Map(Address, UInt);
        const contributorsSet = new Set();

        const [
            upvote,
            downvote,
            amtTotal,
        ] = parallelReduce([0, 0, balance()])
            .invariant(balance() == amtTotal)
            .while(keepGoing())
            .api(Voters.upvote, (notify) => {
                notify(upvote + 1);
                return [upvote + 1, downvote, amtTotal];
            })
            .api(Voters.downvote, (notify) => {
                notify(downvote + 1);
                return [upvote, downvote + 1, amtTotal];
            })
            .api_(Voters.contribute, (amt) => {
                check(amt <= 0, "Contribution too small");
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
                    return [upvote, downvote, amtTotal + amt];
                }];
            })
            .timeout(timeRemaining(), () => {
                Deployer.publish();
                return [upvote, downvote, amtTotal];
            });

        if (checkStatus(upvote, downvote) == PASSED) {
            Proposals.log(state.pad('passed'), id);
            transfer(balance()).to(owner);
        } else {
            Proposals.log(state.pad('failed'), id);
            const fromMapAdd = (m) => fromMaybe(m, (() => Deployer), ((x) => x));
            const fromMapAmt = (m) => fromMaybe(m, (() => 0), ((x) => x));
            commit();
            Deployer.publish();
            const currentBalance = parallelReduce(balance())
                .invariant(balance() == currentBalance)
                .while(currentBalance > 0)
                .api(Voters.claimRefund, (notify => {
                    const amountTransferable = fromMapAmt(amtContributed[this]);
                    if (balance() >= amountTransferable && contributorsSet.member(this)) {
                        transfer(amountTransferable).to(
                            fromMapAdd(contributors[this])
                        );
                        contributorsSet.remove(this);
                        Proposals.log(state.pad('refundPassed'), id);
                        notify(true);
                        return currentBalance - amountTransferable;
                    } else {
                        Proposals.log(state.pad('refundFailed'), id);
                        notify(false);
                        return currentBalance;
                    }
                }));
        }
        transfer(balance()).to(Deployer);
    } else {
        const keepGoing = parallelReduce(true)
            .invariant(balance() == 0)
            .while(keepGoing)
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