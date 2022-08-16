import React from "react";
import { useReach, fmtClasses } from "../../hooks";
import styles from "../../styles/Shared.module.css";

const sleep = (milliseconds) =>
    new Promise((resolve) => setTimeout(resolve, milliseconds));

const Deployed = () => {
    const { contract } = useReach();

    const copyToClipboard = async (button) => {
        navigator.clipboard.writeText(contract.ctcInfoStr);
        // navigator.clipboard.writeText("Some Contract Info");
        const origInnerHTML = button.innerHTML;
        button.innerHTML = "Copied!";
        button.disabled = true;
        await sleep(1000);
        button.innerHTML = origInnerHTML;
        button.disabled = false;
    };

    return (
        <div className={ fmtClasses(styles.container, styles.itemsCenter) }>
            <h1 className={ fmtClasses(styles.infoText) }>DApp deployed!
            </h1>
            <h2 className={ fmtClasses(styles.infoText, styles.widthMax) }>Please distribute this contract info, for other individuals to attach</h2>
            <pre className={ fmtClasses(
                styles.field,
                styles.widthFitContent,
            ) }>
                { contract.ctcInfoStr }
                {/* { "Some Contract Info" } */}
            </pre>
            <div className={fmtClasses(
                styles.container,
                styles.flex,
                styles.itemsCenter,
                styles.widthMax,
            )}>
                <button className={ fmtClasses(
                    styles.actionButton,
                    styles.copyButton,
                ) } onClick={ (e) => copyToClipboard(e.currentTarget) }>
                    Copy to clipboard
                </button>
            </div>
        </div>
    );
};

export default Deployed;