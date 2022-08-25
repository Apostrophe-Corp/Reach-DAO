import React, { useState } from "react";
import { useReach, fmtClasses } from "../../hooks";
import styles from "../../styles/Shared.module.css";

const Contribute = ({ id, infoStr, hide }) => {
    const { defaultContribution, setContribution, makeContribution } = useReach();
    const [amount, setAmount] = useState(0);

    return (
        <div className={ fmtClasses(
            styles.width70,
            styles.flat,
            styles.flex,
            styles.directionY,
            styles.gap5,
            styles.itemsCenter,
        ) }>
            <label htmlFor="contribution"
                className={ fmtClasses(
                    styles.widthMax,
                    styles.flat,
                    styles.flex,
                    styles.itemsCenter,
                ) }>
                <input
                    className={ fmtClasses(
                        styles.widthMax,
                        styles.flat,
                    ) }
                    type="number"
                    placeholder={ defaultContribution }
                    id="contribution"
                    onChange={ (e) => setAmount(e.currentTarget.value) } />
            </label>
            <button
                className={ fmtClasses(
                    styles.actionButton,
                    styles.widthMax,
                ) }
                disabled={ !amount } onClick={ () => {
                    // setContribution(amount);
                    // confirmContribution();
                    makeContribution(amount, id, infoStr);
                    hide();
                } }>Contribute</button>
        </div>
    );
};

export default Contribute;