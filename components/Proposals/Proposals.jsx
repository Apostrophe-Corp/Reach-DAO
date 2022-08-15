import React, { useState } from "react";
import { useReach, fmtClasses } from "../../hooks";
import styles from "../../styles/SubWrapper.module.css";

const Proposals = () => {
    const { setContract, connectAndContribute, proposals } = useReach();


    return (
        <div className={ fmtClasses(styles.container, styles.itemsCenter) }>
            {
                proposals.map((el, i) => {
                    return (
                        <div key={ i }>
                            <h3>{ el.title }</h3>
                            <ul>
                                <li>Owner: { el.owner }</li>
                                <li>Staked Tokens: { el.staked }</li>
                                <li><a href={ el.link } target="_blank" rel="noreferrer">View proposal README</a></li>
                                <li>
                                    <p>
                                        { el.description }
                                    </p>
                                </li>
                            </ul>
                            <button onClick={ () => {
                                const ctcInfoStr = el.contract;
                                setContract({ ctcInfoStr });
                                connectAndContribute();
                            } }>Contribute to this proposal</button>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default Proposals;