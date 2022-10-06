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
                                >{ el.upVotes ?? 0 }</span>
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
                                >{ el.downVotes ?? 0 }</span>
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
                                    connectAndClaimRefund(el.id, el.contract);
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
                    Transform your ideas into products. Create a proposal, let your peers contribute and vote on it and if it passes it becomes a bounty.
                    <br />
                    Be it a full scale project, a part of one or a tutorial, tap into our pull of blockchain enthusiasts to build them with you.
                </p>
            </div>
            <h3 className={ fmtClasses(styles.widthMax, styles.tCenter, info.suhHeaders) }>What's your idea?</h3>
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
                ) }>Make a Proposal</button>
            </div>
            <br />
            <br />
            <br />
            { proposals.filter(el => el.id > ((page - 1) * 5) && el.id <= ((page) * 5) && !el.timedOut).length > 0 &&
                <h3 className={ fmtClasses(styles.widthMax, styles.tCenter, info.suhHeaders) }>Active Proposals</h3> }
            <br />
            { proposals.filter(el => el.id > ((page - 1) * 5) && el.id <= ((page) * 5) && !el.timedOut).length > 0 &&
                proposals.filter(el => el.id > ((page - 1) * 5) && el.id <= ((page) * 5) && !el.timedOut).map((el, i) => <Proposal el={ el } key={ i } />)
            }
            <br />
            <div className={ fmtClasses(
                styles.flat,
                styles.flex,
                styles.widthMax,
                styles.itemsCenter,
                styles.gap10,
            ) }>
                { proposals.filter(el => el.id > ((page - 1) * 5) && el.id <= ((page) * 5) && !el.timedOut).length > 0 &&
                    pageNumbers.map((el, i) => <PageNumbers key={ i } index={ i + 1 } />)
                }
            </div>
            <br />
            { proposals.filter(el => el.id > ((page - 1) * 5) && el.id <= ((page) * 5) && el.timedOut && !el.didPass && !el.isDown).length > 0 &&
                <h3 className={ fmtClasses(styles.widthMax, styles.tCenter, info.suhHeaders) }>Timed out Proposals</h3> }
            <br />
            { proposals.filter(el => el.id > ((page - 1) * 5) && el.id <= ((page) * 5) && el.timedOut && !el.didPass && !el.isDown).length > 0 &&
                proposals.filter(el => el.id > ((page - 1) * 5) && el.id <= ((page) * 5) && el.timedOut && !el.didPass && !el.isDown).map((el, i) => <Proposal el={ el } key={ i } />)
            }
            <br />
            <br />
            <br />
        </div>
    );
};

export default Proposals;