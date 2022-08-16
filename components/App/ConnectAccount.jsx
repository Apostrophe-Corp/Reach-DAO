import React from 'react';
import { useReach, fmtClasses } from "../../hooks";
import styles from "../../styles/Shared.module.css";

const ConnectAccount = () => {
    const { connectAccount } = useReach();
    return (
        <div className={ fmtClasses(styles.container, styles.flex, styles.itemsCenter) }>
            <p className={ fmtClasses(styles.infoText) } >
                Click the button below to connect to your wallet. If this takes more than a few seconds, there may be something wrong.
            </p>
            <div className={ fmtClasses(styles.flex, styles.flat, styles.itemsCenter, styles.widthMax) }>
                <button onClick={ connectAccount } className={ fmtClasses(styles.actionButton) }>Connect my wallet</button>
            </div>
        </div>
    );
};

export default ConnectAccount;