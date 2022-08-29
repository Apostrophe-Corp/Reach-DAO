import React, { useState, useEffect } from "react";
import { useReach, fmtClasses } from "../../hooks";
import styles from "../../styles/Shared.module.css";
import info from "../../styles/Info.module.css";
import proposal from "../../styles/Proposals.module.css";

const Bounties = () => {
    const {bounties, standardUnit } = useReach();
    const [page, setPage] = useState(1);
    const [pageNumbers, setPageNumbers] = useState([]);

    useEffect(() => {
        const x = [], runs = Math.ceil(bounties.length / 5);
        let i = 0;
        for (i; i < runs; i++) {
            x.push(i);
        }
        setPageNumbers(x);
    }, [bounties, page]);

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

    const Bounty = ({ el }) => {
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
                <div className={ fmtClasses(
                    styles.flat,
                    styles.gap5,
                    styles.flex,
                    styles.widthMax,
                    styles.itemsCenter,
                    proposal.interact,
                ) }>
                    <span
                        className={ fmtClasses(
                            proposal.prizing,
                            styles.tCenter,
                            styles.widthMax,
                        ) }
                    >Grand Prize: <span className={ fmtClasses(
                        proposal.prize,
                    ) }>{ el.prize ?? 99999 }</span> { standardUnit }</span>
                    <button
                        className={ fmtClasses(
                            styles.actionButton,
                        ) }
                        onClick={ () => {
                            alert('Thanks for showing your interest in this quest. Stick around a while and our Guild would be fully operational. Until then get your weapons, armor and party members ready!!');
                        } }
                    >Accept this Quest</button>
                </div>
            </div>
        );
    };
    return (
        <div className={ fmtClasses(styles.container, styles.itemsCenter) }>
            <h1 className={ fmtClasses(info.devsText, styles.widthMax, styles.tCenter) }>Bounties</h1>
            <div className={ fmtClasses(styles.widthMax) }>
                <p className={ fmtClasses(
                    styles.widthMax,
                    styles.tCenter,
                ) }>
                    Work on real life projects and earn.
                    Developers who contribute to projects also get certificates in the form of an NFT.
                    <br />
                    Pick a bounty that you’re interested in and work on it. Earn while adding to your experience and portfolio.
                </p>
            </div>
            <br />
            <br />
            <br />
            { bounties.length > 0 &&
                <h3 className={ fmtClasses(styles.widthMax, styles.tCenter, info.suhHeaders) }>Bounties</h3> }
            <br />
            {
                bounties.filter(el => el.id > ((page - 1) * 5) && el.id <= ((page) * 5)).map((el, i) => <Bounty el={ el } key={ i } />)
            }
            <br />
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
            </div>
            <br />
            <br />
            <br />
        </div>
    );
};

export default Bounties;
