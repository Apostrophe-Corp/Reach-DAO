import React, { useState } from "react";
import { ImGift } from "react-icons/im";
import { BiUpvote, BiDownvote } from "react-icons/bi";
import { useReach, fmtClasses } from "../../hooks";
import styles from "../../styles/Shared.module.css";
import proposal from "../../styles/Proposals.module.css";

const Proposals = () => {
    const { setContract, connectAndContribute, proposals } = useReach();


    return (
        <div className={ fmtClasses(
            styles.container,
            styles.spaceBetween,
            styles.flex,
            styles.directionY,
            styles.gap15,
        ) }>
            {
                proposals.map((el, i) => {
                    return (
                        <div key={ i } className={ fmtClasses(
                            styles.flex,
                            styles.widthMax,
                            proposal.container
                        ) }>
                            <h3 className={ fmtClasses(
                                proposal.title
                            ) }>{ el.title }</h3>
                            <ul className={ fmtClasses(
                                styles.flat,
                                styles.widthMax,
                            ) }>
                                <li className={ fmtClasses(
                                    styles.flat,
                                    styles.widthMax,
                                ) }>
                                    { el.description }
                                </li>
                                <li className={ fmtClasses(
                                    styles.flat,
                                    styles.widthMax,
                                ) }>
                                    <div className={ fmtClasses(
                                        proposal.infoContainer,
                                        styles.widthMax,
                                    ) }>
                                        <span className={ fmtClasses(
                                            proposal.owner,
                                        ) }> <strong>Owner:</strong> { el.owner }</span>
                                        <a className={ fmtClasses(
                                            proposal.readMe,
                                        ) } href={ el.link } target="_blank" rel="noreferrer">View proposal README</a>
                                    </div>
                                </li>
                            </ul>
                            <div className={ fmtClasses(
                                styles.flat,
                                styles.flex,
                                styles.itemsCenter,
                                styles.widthMax,
                                styles.gap15,
                                proposal.interact,
                            ) }>
                                <button onClick={ () => {
                                    const ctcInfoStr = el.contract;
                                    setContract({ ctcInfoStr });
                                    connectAndContribute();
                                } }
                                    className={ fmtClasses(
                                        proposal.upvote,
                                    ) }
                                ><BiUpvote /></button>
                                <button onClick={ () => {
                                    const ctcInfoStr = el.contract;
                                    setContract({ ctcInfoStr });
                                    connectAndContribute();
                                } }
                                    className={ fmtClasses(
                                        proposal.contribute,
                                    ) }
                                ><ImGift /></button>
                                <button onClick={ () => {
                                    const ctcInfoStr = el.contract;
                                    setContract({ ctcInfoStr });
                                    connectAndContribute();
                                } }
                                    className={ fmtClasses(
                                        proposal.downvote,
                                    ) }
                                ><BiDownvote /></button>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default Proposals;