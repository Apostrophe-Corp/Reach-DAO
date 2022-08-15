import React from "react";
import { useReach, useClasses } from "../../hooks";

const sleep = (milliseconds) =>
    new Promise((resolve) => setTimeout(resolve, milliseconds));

const WaitingForAttacher = () => {
    const { contract } = useReach();

    const copyToClipboard = async (button) => {
        navigator.clipboard.writeText(contract.ctcInfoStr);
        const origInnerHTML = button.innerHTML;
        button.innerHTML = "Copied!";
        button.disabled = true;
        await sleep(1000);
        button.innerHTML = origInnerHTML;
        button.disabled = false;
    };

    return (
        <div>
            Dapp deployed!
            <br /> Please distribute this contract info, for other individuals to attach:
            <pre className={ useClasses('ContractInfo') }>
                { contract.ctcInfoStr }
            </pre>
            <button onClick={ (e) => copyToClipboard(e.currentTarget) }>
                Copy to clipboard
            </button>
        </div>
    );
};

export default WaitingForAttacher;