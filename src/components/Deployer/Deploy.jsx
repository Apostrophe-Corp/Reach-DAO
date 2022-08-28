import React from "react";
import { useReach, fmtClasses } from "../../hooks";
import styles from "../../styles/Shared.module.css";

const Deploy = () => {
    const { deploy, setTokenSupply, defaultTokenSupply } = useReach();
    return (
        <div className={ fmtClasses(styles.container, styles.itemsCenter) }>
            <h1 className={ fmtClasses(styles.infoText) }>Welcome Admin
            </h1>
            <h2 className={ fmtClasses(styles.infoText, styles.widthMax) }>Proceed with Deployment</h2>
            <div
                className={ fmtClasses(
                    styles.flex,
                    styles.itemsCenter,
                    styles.gap10,
                    styles.directionY,
                    styles.widthMax,
                )
                }>
                <button
                    className={ fmtClasses(styles.actionButton) }
                    onClick={ async () => { await deploy(); } }
                >Deploy</button>
            </div>
        </div>
    );
};

export default Deploy;