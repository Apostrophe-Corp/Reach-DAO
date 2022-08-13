import React, { useState } from "react";
import { useReach } from "../../hooks";

const Contribute = () => {
    const { defaultContribution, setContribution, confirmContribution } = useReach();
    const [amount, setAmount] = useState(0);

    return (
        <div>
            <label htmlFor="contribution">
                <input
                    type="number"
                    placeholder={ defaultContribution }
                    id="contribution"
                    onChange={ (e) => setAmount(e.currentTarget.value) } />
            </label>
            <button disabled={ !amount } onClick={ () => {
                setContribution(amount);
                confirmContribution();
            } }>Contribute</button>
        </div>
    );
};

export default Contribute;