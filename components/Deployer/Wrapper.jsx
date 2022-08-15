import React from "react";
import { useClasses } from "../../hooks";
import styles from "../../styles/SubWrapper.module.css";

const Wrapper = ({ children }) => {
    return (
        <div className={ useClasses(styles.flat) }>
            <div className={ useClasses(styles.flat) }>
                <header className={ useClasses(styles.label) }>
                    <h1>Deployer</h1>
                </header>
                <div className={ useClasses(styles.flat, styles.children) }>
                    { children }
                </div>
            </div>
        </div>
    );
};

export default Wrapper;