import React from "react";
import {fmtClasses}from "../../hooks";
import styles from "../../styles/Shared.module.css";

const Deploying = () => {
    return  (
    <div className={ fmtClasses(styles.container, styles.itemsCenter) }>
           <h1 className={ fmtClasses(styles.infoText) }>Deploying... please wait.</h1>
    </div>
    );
};

export default Deploying;