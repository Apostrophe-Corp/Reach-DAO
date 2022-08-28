import React from "react";
import { useReach, fmtClasses } from "../../hooks";
import styles from "../../styles/Shared.module.css";

const InfoCenter = () => {
    const { deploy, setTokenSupply, defaultTokenSupply } = useReach();
    return (
        <div className={ fmtClasses(styles.container, styles.itemsCenter) }>
            <h1 className={ fmtClasses(styles.infoText) }>Info Center
            </h1>
        </div>
    );
};

export default InfoCenter;