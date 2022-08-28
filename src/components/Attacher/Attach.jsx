import React, { useState } from "react";
import { useReach, fmtClasses } from "../../hooks";
import styles from "../../styles/Shared.module.css";

const Attach = () => {
    const [ctcInfoStr, setCtcInfoStr] = useState("");
    const { attach } = useReach();
    return (
        <div className={ fmtClasses(styles.container, styles.itemsCenter) }>
            <h2 className={ fmtClasses(styles.infoText, styles.widthMax) }>Please paste the contract info to attach to:</h2>
            <div className={ fmtClasses(
                styles.container,
                styles.flex,
                styles.itemsCenter,
                styles.widthMax,
            ) }>
                <div className={ fmtClasses(
                    styles.widthMax,
                    styles.flat,
                    styles.container,
                    styles.flex,
                    styles.itemsCenter,
                ) }>
                    <textarea
                        spellCheck='false'
                        className={ fmtClasses(
                            styles.field,
                            styles.width70,
                        ) }
                        onChange={ (e) => setCtcInfoStr(e.currentTarget.value) }
                        placeholder="Enter contract info"
                    />
                </div>
                <button className={ fmtClasses(
                    styles.actionButton,
                ) }
                    disabled={ !ctcInfoStr }
                    onClick={ () => attach(ctcInfoStr) }>
                    Attach
                </button>
            </div>
        </div>
    );
};

export default Attach;