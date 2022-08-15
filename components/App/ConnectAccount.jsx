import React from 'react';
import { useReach } from "../../hooks/useReach";

const ConnectAccount = () => {
    const { connectAccount } = useReach();
    return (
        <div>
            Please wait while we connect to your account. If this take more than a few seconds, there may be something wrong.
            <div>
                <button onClick={ connectAccount }>Connect Algo Wallet</button>
            </div>
        </div>
    );
};

export default ConnectAccount;