import React, { useState } from "react";
import { useReach, fmtClasses } from "../../hooks";
import styles from "../../styles/SubWrapper.module.css";
import proposal from "../../styles/Proposals.module.css";

const Proposals = () => {
    const { setContract, connectAndContribute, proposals } = useReach();


    return (
        <div className={ fmtClasses(
            styles.container,
            styles.spaceBetween,
            styles.flex,
        ) }>
            {
                proposals.map((el, i) => {
                    return (
                        <div key={ i }>
                            <h3>{ el.title }</h3>
                            <ul>
                                <li>
                                    <p>
                                        { el.description }
                                    </p>
                                </li>
                                <li>
                                    <div>
                                        <span> Owner: { el.owner }</span>
                                        <a href={ el.link } target="_blank" rel="noreferrer">View proposal README</a>
                                    </div>
                                </li>
                                <li></li>

                            </ul>
                            <div className={ fmtClasses(
                                styles.flat,
                                styles.flex,
                                styles.itemsCenter,
                                styles.widthMax,
                            ) }>
                                <button onClick={ () => {
                                    const ctcInfoStr = el.contract;
                                    setContract({ ctcInfoStr });
                                    connectAndContribute();
                                } }>Contribute to this proposal</button>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default Proposals;