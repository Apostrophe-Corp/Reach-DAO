/* eslint-disable eqeqeq */
/* eslint-disable no-undef */
"reach 0.1";

export const main = Reach.App(() => {
    const Deployer = Participant("Deployer", {
        ...hasRandom,
    });

    const Voters = API("Voters", {
        contribute: Fun([UInt], Null),
    });
    init();

    Deployer.publish();
    commit();
    Deployer.publish();
    const contributors = new Map(
        UInt,
        Object({
            address: Address,
            amt: UInt,
        })
    );

    const end = lastConsensusTime();

    const isValid = true;

    const [count, currentBal] = parallelReduce([0, balance()])
        .invariant(balance() == balance())
        .while(lastConsensusTime() <= end)
        .api_(Voters.contribute, (amt) => {
            return [
                amt,
                (notify) => {
                    notify(null);
                    contributors[count] = { address: this, amt: amt };
                    return [count + 1, balance()];
                    // return [count + 1, currentBal + amt];
                },
            ];
        })
        .timeout(absoluteTime(end), () => {
            Deployer.publish();
            if (isValid) {
                transfer(balance()).to(Deployer);
            } else {
                var [newCount, currentBalance] = [count, balance()];
                invariant(balance() == currentBalance);
                while (newCount > 0) {
                    commit();
                    Deployer.publish();
                    transfer(fromMap(contributors[newCount]).amt).to(
                        fromMap(contributors[newCount]).address
                    );
                    [newCount, currentBalance] = [newCount - 1, balance()];
                    continue;
                }
            }
            return [count, currentBal];
        });
    transfer(balance()).to(Deployer);
    commit();
    exit();
});
