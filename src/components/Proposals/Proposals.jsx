import React, { useState, useEffect } from "react";
import { ImGift } from "react-icons/im";
import { BiUpvote, BiDownvote } from "react-icons/bi";
import { useReach, fmtClasses } from "../../hooks";
import styles from "../../styles/Shared.module.css";
import Contribute from "./Contribute";
import proposal from "../../styles/Proposals.module.css";
import info from "../../styles/Info.module.css";

const Proposals = () => {
    const { connectAndUpvote, connectAndDownvote, connectAndClaimRefund, proposals, setViews, standardUnit } = useReach();
    const [page, setPage] = useState(1);
    const [pageNumbers, setPageNumbers] = useState([]);

    useEffect(() => {
        const x = [], runs = Math.ceil(proposals.length / 5);
        let i = 0;
        for (i; i < runs; i++) {
            x.push(i);
        }
        setPageNumbers(x);
    }, [proposals, page]);

    const PageNumbers = ({ index }) => {
        return (
            <div key={ index } className={ fmtClasses(
                styles.flat,
                styles.flex,
                styles.widthFitContent,
                styles.itemsCenter,
                page === index ? styles.pageNumActive : styles.pageNum
            ) } onClick={ () => { setPage(index); } }>
                { index }
            </div>
        );
    };

    const Proposal = ({ el }) => {
        const [showContrib, setShowContrib] = useState(false);
        return (
            <div className={ fmtClasses(
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
                            ) } href={ el.link } target="_blank" rel="noreferrer">View Proposal Details</a>
                        </div>
                    </li>
                </ul>

                { !el.timedOut ?
                    <div className={ fmtClasses(
                        styles.flat,
                        styles.gap15,
                        styles.flex,
                        styles.widthMax,
                        styles.itemsCenter,
                        proposal.interact,
                    ) }>
                        <div onClick={ async () => {
                            connectAndUpvote(el.id, el.contract);
                        } } className={ fmtClasses(
                            proposal.innerInteract,
                            styles.flex,
                            styles.widthFitContent,
                            styles.itemsCenter,
                        ) } title='Upvote this proposal'>
                            <BiUpvote
                                className={ fmtClasses(
                                    proposal.upvote,
                                ) } /><span className={ fmtClasses(
                                    proposal.dInlineBlock
                                ) }
                                >{ el.upvotes ?? 0 }</span>
                        </div>
                        <div onClick={ () => {
                            setShowContrib(!showContrib);
                        } } className={ fmtClasses(
                            proposal.innerInteract,
                            styles.flex,
                            styles.widthFitContent,
                            styles.itemsCenter,
                            styles.directionY,
                        ) } title='Contribute to this proposal'>
                            <ImGift
                                className={ fmtClasses(
                                    proposal.contribute,
                                ) } />
                            <span className={ fmtClasses(
                                styles.dInlineBlock,
                                styles.tCenter,
                                styles.widthMax,
                            ) }
                            >{ el.contribs ?? 0 } <br /> <span className={ fmtClasses(
                                styles.tiny) }>{ standardUnit }</span></span>
                        </div>
                        <div onClick={ async () => {
                            connectAndDownvote(el.id, el.contract);
                        } } className={ fmtClasses(
                            proposal.innerInteract,
                            styles.flex,
                            styles.widthFitContent,
                            styles.itemsCenter,
                        ) } title='Downvote this proposal'>
                            <BiDownvote
                                className={ fmtClasses(
                                    proposal.downvote,
                                ) } /><span className={ fmtClasses(
                                    proposal.dInlineBlock
                                ) }
                                >{ el.downvotes ?? 0 }</span>
                        </div>
                    </div>
                    :
                    el.didPass ?
                        <div className={ fmtClasses(
                            styles.flat,
                            styles.flex,
                            styles.widthMax,
                            styles.itemsCenter
                        ) }>
                            <span className={ fmtClasses(
                                proposal.dInlineBlock
                            ) }
                            >Project passed!</span>
                        </div>
                        :
                        <div className={ fmtClasses(
                            styles.flat,
                            styles.flex,
                            styles.widthMax,
                            styles.itemsCenter
                        ) }>
                            <button
                                className={ fmtClasses(
                                    styles.actionButton,
                                ) }
                                onClick={ () => {
                                    connectAndClaimRefund(el.contract);
                                } }
                            >Reclaim Funds</button>
                        </div>
                }

                <div className={ fmtClasses(
                    styles.flat,
                    styles.gap15,
                    styles.flex,
                    styles.widthMax,
                    styles.itemsCenter,
                    styles.directionY,
                    proposal.interact,
                ) }>
                    { showContrib &&
                        <Contribute id={ el.id } infoStr={ el.contract } hide={ () => { setShowContrib(false); } } />
                    }
                </div>
            </div>
        );
    };


    return (
        <div className={ fmtClasses(
            styles.container,
            styles.spaceBetween,
            styles.flex,
            styles.directionY,
            styles.gap15,
        ) }>
            <h1 className={ fmtClasses(info.devsText, styles.widthMax, styles.tCenter) }>Proposals</h1>
            <div className={ fmtClasses(styles.widthMax) }>
                <p className={ fmtClasses(
                    styles.widthMax,
                    styles.tCenter,
                ) }>
                    DApps are made of multiple agents interacting with each other through some backend consensus network, like Ethereum or Algorand. These agents act on behalf of principals that provide direction and authority through information. These principals might be humans or other autonomous agents or even committees and organizations with their own structure. The consensus network allows these agents to transfer and receive value in the form of network-specific tokens, like ETH or ALGO. The network also allows the creation of "contracts" that ensure that all agents follow the same rules as they take turns computing and publishing values and information. The details of these "contracts" are specific to each consensus network, but they are implicitly trusted by all agents and principals because their operation can be independently verified to match the previously agreed-upon rules.
                </p>
            </div>
            {
                proposals.filter(el => el.id > ((page - 1) * 5) && el.id <= ((page) * 5)).map((el, i) => <Proposal el={ el } key={ i } />)
            }
            <div className={ fmtClasses(
                styles.flat,
                styles.flex,
                styles.widthMax,
                styles.itemsCenter,
                styles.gap10,
            ) }>
                <button onClick={ () => { setViews({ view: 'MakeProposal', wrapper: 'ProposalWrapper' }); } } className={ fmtClasses(
                    styles.width70,
                    styles.actionButton,
                    styles.dInlineBlock,
                ) }>Make Proposal</button>
            </div>
            <div className={ fmtClasses(
                styles.flat,
                styles.flex,
                styles.widthMax,
                styles.itemsCenter,
                styles.gap10,
            ) }>
                {
                    pageNumbers.map((el, i) => <PageNumbers key={ i } index={ i + 1 } />)
                }
            </div> </div>
    );
};

export default Proposals;