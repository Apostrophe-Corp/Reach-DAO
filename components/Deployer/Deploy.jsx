import React from "react";
import { useReach, useClasses } from "../../hooks";
import styles from "../../styles/Shared.module.css";

const Deploy = () => {
    const { deploy, setTokenSupply, defaultTokenSupply } = useReach();
    return (
        <div className={ useClasses(styles.container, styles.itemsCenter) }>
            <h1 className={ useClasses(styles.infoText) }>Welcome Admin
            </h1>
            <h2 className={ useClasses(styles.infoText, styles.widthMax) }>Proceed with Deployment</h2>
            <div
                className={ useClasses(
                    styles.flex,
                    styles.itemsCenter,
                    styles.gap10,
                    styles.directionY,
                    styles.widthMax,
                )
                }>
                <button
                    className={ useClasses(styles.actionButton) }
                    onClick={ () => deploy() }
                >Deploy</button>
            </div>
        </div>
    );
};

export default Deploy;