import React, { useState } from "react";
import { useReach, useClasses } from "../../hooks";

const Attach = () => {
    const [ctcInfoStr, setCtcInfoStr] = useState("");
    const { attach } = useReach();
    return (
        <div>
            Please paste the contract info to attach to:
            <br />
            <textarea
                spellCheck='false'
                className={ useClasses("ContractInfo") }
                onChange={ (e) => setCtcInfoStr(e.currentTarget.value) }
                placeholder="Enter contract info"
            />
            <br />
            <button disabled={ !ctcInfoStr } onClick={ () => attach(ctcInfoStr) }>
                Attach
            </button>
        </div>
    );
};

export default Attach;