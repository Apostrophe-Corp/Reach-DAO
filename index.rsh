/* eslint-disable no-array-constructor */
/* eslint-disable no-use-before-define */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
'reach 0.1';

const [isOutcome, NOT_PASSED, PASSED, INPROGRESS] = makeEnum(3);

const DEADLINE = 20;

const state = Bytes(20);


const checkStatus = (numMembers, upVotes, downVotes) => {
    const result = downVotes > numMembers * 50 / 100 ? NOT_PASSED :
        upVotes > numMembers * 50 / 100 ? PASSED :
            INPROGRESS;
    return result;
};

assert(checkStatus(100, 0, 51) == NOT_PASSED);
assert(checkStatus(100, 0, 0) == INPROGRESS);
assert(checkStatus(100, 51, 0) == PASSED);


forall(UInt, numMembers =>
    forall(UInt, upVotes =>
        forall(UInt, downVotes =>
            assert(isOutcome(checkStatus(numMembers, upVotes, downVotes))))));

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
        getContract: Fun([], Bytes(100))
    });

    const objectRep = Struct([
        ["id", UInt],
        ["title", Bytes(25)],
        ["link", Bytes(150)],
        ["description", Bytes(180)],
        ["owner", Address],
        ["contractInfo", Bytes(100)]
    ]);

    const InformFront = Events({
        create: [UInt, Bytes(25), Bytes(150), Bytes(180), Address, Bytes(100)],
        that: [state, UInt, UInt]
    });

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
        log: [state, UInt],
        created: [UInt, Bytes(25), Bytes(150), Bytes(180), Address, Bytes(100)],
    });
    init();
    Deployer.only(() => {
        const { title, link, description, owner, id, isProposal, numMembers, deadline } = declassify(interact.getProposal);
    });
    Deployer.publish(description, isProposal, numMembers);

    if (isProposal) {
        commit();
        Deployer.only(() => {
            const contractInfo = declassify(interact.getContract());
        });
        Deployer.publish(title, link, owner, id, deadline, contractInfo);
        Proposals.created(id, title, link, description, owner, contractInfo);
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
            keepGoing,
        ] = parallelReduce([0, 0, 0, 0, Deployer, true])
            .invariant(balance() == amtTotal)
            .while(lastConsensusTime() <= end && keepGoing)
            .api(Voters.upvote, (notify) => {
                notify(upvote + 1);
                return [upvote + 1, downvote, count, amtTotal, lastAddress, checkStatus(upvote + 1, downvote, numMembers) == INPROGRESS ? true : false];
            })
            .api(Voters.downvote, (notify) => {
                notify(downvote + 1);
                return [upvote, downvote + 1, count, amtTotal, lastAddress, checkStatus(upvote, downvote + 1, numMembers) == INPROGRESS ? true : false];
            })
            .api_(Voters.contribute, (amt) => {
                check(amt > 0, "Contribution too small")
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
                    return [upvote, downvote, count + 1, amtTotal + amt, this, keepGoing];
                }];
            })
            .timeout(absoluteTime(end), () => {
                Deployer.publish();
                // Proposals.log(state.pad('timeout'), id);
                return [upvote, downvote, count, amtTotal, lastAddress, keepGoing];
            });

        if (checkStatus(numMembers, upvote, downvote) == PASSED) {
            Proposals.log(state.pad('passed'), id);
            transfer(balance()).to(owner);
        }
        else if (checkStatus(numMembers, upvote, downvote) == INPROGRESS) {
            if (upvote > downvote && upvote + downvote > numMembers * 50 / 100) {
                Proposals.log(state.pad('passed'), id);
                transfer(balance()).to(owner);
            } else {
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

        } else {
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
                InformFront.create(
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
                InformFront.that(state.pad('upvoted'), num1, num2);
                return keepGoing;
            })
            .api(Voters.downvoted, (fNum, sNum, notify) => {
                notify(null);
                const num1 = fNum;
                const num2 = sNum;
                InformFront.that(state.pad('downvoted'), num1, num2);
                return keepGoing;
            })
            .api(Voters.contributed, (fNum, sNum, notify) => {
                notify(null);
                const num1 = fNum;
                const num2 = sNum;
                InformFront.that(state.pad('contributed'), num1, num2);
                return keepGoing;
            })
            .api(Voters.timedOut, (fNum, sNum, notify) => {
                notify(null);
                const num1 = fNum;
                const num2 = sNum;
                InformFront.that(state.pad('timedOut'), num1, num2);
                return keepGoing;
            });
    }
    commit();
});