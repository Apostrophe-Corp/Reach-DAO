import React from "react";
import { fmtClasses } from "../../hooks";
import styles from "../../styles/SubWrapper.module.css";

const Wrapper = ({ children }) => {
    return (
        <div className={ fmtClasses(styles.flat) }>
            <div className={ fmtClasses(styles.flat) }>
                <header className={ fmtClasses(styles.label) }>
                    <h1>Bounties</h1>
                </header>
                <div className={ fmtClasses(styles.flat, styles.children) }>
                    { children }
                </div>
            </div>
        </div>
    );
};

export default Wrapper;