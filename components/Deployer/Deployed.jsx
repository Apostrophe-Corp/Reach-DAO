import React from "react";
import { useReach, useClasses } from "../../hooks";
import styles from "../../styles/Shared.module.css";

const sleep = (milliseconds) =>
    new Promise((resolve) => setTimeout(resolve, milliseconds));

const Deployed = () => {
    const { contract } = useReach();

    const copyToClipboard = async (button) => {
        // navigator.clipboard.writeText(contract.ctcInfoStr);
        navigator.clipboard.writeText("Some Contract Info");
        const origInnerHTML = button.innerHTML;
        button.innerHTML = "Copied!";
        button.disabled = true;
        await sleep(1000);
        button.innerHTML = origInnerHTML;
        button.disabled = false;
    };

    return (
        <div className={ useClasses(styles.container, styles.itemsCenter) }>
            <h1 className={ useClasses(styles.infoText) }>Dapp deployed!
            </h1>
            <h2 className={ useClasses(styles.infoText, styles.widthMax) }>Please distribute this contract info, for other individuals to attach</h2>
            <pre className={ useClasses(
                styles.field,
                styles.widthMax,
            ) }>
                {/* { contract.ctcInfoStr } */ }
                { "Some Contract Info" }
            </pre>
            <button className={ useClasses(
                styles.actionButton,
                styles.copyButton,
            ) } onClick={ (e) => copyToClipboard(e.currentTarget) }>
                Copy to clipboard
            </button>
        </div>
    );
};

export default Deployed;