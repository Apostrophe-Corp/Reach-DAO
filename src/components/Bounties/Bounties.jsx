import React from "react";
import { useReach, fmtClasses } from "../../hooks";
import styles from "../../styles/Shared.module.css";
import info from "../../styles/Info.module.css";

const Bounties = () => {
    const { deploy, setTokenSupply, defaultTokenSupply } = useReach();
    return (
        <div className={ fmtClasses(styles.container, styles.itemsCenter) }>
            <h1 className={ fmtClasses(info.devsText, styles.widthMax, styles.tCenter) }>Proposals</h1>
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
        </div>
    );
};

export default Bounties;