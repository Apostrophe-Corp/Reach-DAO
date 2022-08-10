import React, { useState } from "react";
import {
    loadStdlib,
    ALGO_MyAlgoConnect as MyAlgoConnect
} from "@reach-sh/stdlib";
import * as backend from "../build/index.main.mjs";
const reach = loadStdlib(process.env);

reach.setWalletFallback(
    reach.walletFallback({
        providerEnv: "TestNet",
        MyAlgoConnect,
    })
);

const { standardUnit } = reach;

export const ReachContext = React.createContext();

const ReachContextProvider = ({ children }) => {
    const [defaults] = useState({
        defaultFundAmt: "10",
        defaultContribution: "1",
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
    const [contribution, setContribution] = useState(defaults.defaultContribution);

    const [contract, setContract] = useState(null);

    const [resolveVote, setResolveVote] = useState({});
    const [vote, setVote] = useState(null);

    const connectAccount = async () => {
        const account = await reach.getDefaultAccount();
        const balAtomic = await reach.balanceOf(account);
        const balance = reach.formatCurrency(balAtomic, 4);
        setUser({
            account,
            balance
        });
        if (await reach.canFundFromFaucet()) {
            setViews({ view: "FundAccount" });
        } else {
            setViews({ view: "DeployerOrAttacher", wrapper: "AppWrapper" });
        }
    };

    const fundAccount = async (fundAmount) => {
        await reach.fundFromFaucet(user.account, reach.parseCurrency(fundAmount));
        setViews({ views: "DeployerOrAttacher" });
    };

    const skipFundAccount = async () => {
        setViews({ view: "DeployerOrAttacher", wrapper: "AppWrapper" });
    };

    const selectAPI = () => {
        setViews({ wrapper: "AttacherWrapper", view: "Attach" });
    };

    const selectDeployer = () => {
        setViews({ wrapper: "DeployerWrapper", view: "MakeProposal" });
    };

    const makeProposal = async () => {
        // TODO implement the interact functionality
    };

    const contribute = async () => {
        // TODO implement the API call functionality
    };

    const approveProposal = async () => {
        // TODO optional
    };

    // Still in progress....
};

// Still in progress....