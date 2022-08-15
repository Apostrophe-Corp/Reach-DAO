import React from 'react';
import { useReach, useClasses } from "../../hooks";
import styles from "../../styles/Shared.module.css";

const ConnectAccount = () => {
    const { connectAccount } = useReach();
    return (
        <div className={ useClasses(styles.container, styles.flex, styles.itemsCenter) }>
            <p className={ useClasses(styles.infoText) } >
                Click the button below to connect to your MyAlgo Connect account. If this takes more than a few seconds, there may be something wrong.
            </p>
            <div className={ useClasses(styles.flex, styles.flat, styles.itemsCenter, styles.widthMax) }>
                <button onClick={ connectAccount } className={ useClasses(styles.actionButton) }>Connect Algo Wallet</button>
            </div>
        </div>
    );
};

export default ConnectAccount;