import React from "react";
import { useReach, fmtClasses } from "../../hooks";
import styles from "../../styles/Shared.module.css";
import info from "../../styles/Info.module.css";

const InfoCenter = () => {
    const { deploy, setTokenSupply, defaultTokenSupply } = useReach();
    return (
        <div className={ fmtClasses(styles.container, styles.itemsCenter) }>
            <div className={ fmtClasses(
                styles.widthMax,
                styles.flex,
                info.briefing,
                styles.itemsYCenter,
                styles.spaceXEvenly,
            ) }>
                <div className={ fmtClasses(
                    info.parts,
                    info.rshDao,
                ) }></div>
                <div className={ fmtClasses(
                    info.parts,
                    styles.flex,
                    styles.itemsStart,
                    styles.tCenter,
                ) }>
                    <h1 className={ fmtClasses(styles.widthMax, styles.infoText, styles.tCenter) }>Reach DAO
                    </h1>
                    <p className={ fmtClasses(
                        styles.widthMax,
                        styles.tCenter,
                    ) }>
                        A hub for Web3 professionals.<br /><br />We connect talent with work, tutorials, and ideas.<br />
                        The community gets to have their ideas built and Reach Lang developers get to gain experience working on real world projects, and up to date information about everything Reach.
                    </p>
                </div>
            </div>

            <div className={ fmtClasses(styles.container, styles.itemsCenter) }></div>
            <div className={ fmtClasses(styles.widthMax) }>
                <div className={ fmtClasses(
                    styles.widthMax,
                    styles.flat,
                ) }>
                    <h1 className={ fmtClasses(info.devsText, styles.widthMax, styles.tCenter) }>DApps</h1>
                    <p className={ fmtClasses(
                        styles.widthMax,
                        styles.tCenter,
                    ) }>
                        DApps are made of multiple agents interacting with each other through some backend consensus network, like Ethereum or Algorand. These agents act on behalf of principals that provide direction and authority through information. These principals might be humans or other autonomous agents or even committees and organizations with their own structure. The consensus network allows these agents to transfer and receive value in the form of network-specific tokens, like ETH or ALGO. The network also allows the creation of "contracts" that ensure that all agents follow the same rules as they take turns computing and publishing values and information. The details of these "contracts" are specific to each consensus network, but they are implicitly trusted by all agents and principals because their operation can be independently verified to match the previously agreed-upon rules.
                    </p>
                    <h3 className={ fmtClasses(styles.widthMax, styles.tCenter, info.suhHeaders) }>How do you build such a DApp?..</h3>
                    <br />
                    <h3 className={ fmtClasses(styles.widthMax, styles.tCenter, info.suhHeaders) }>With Reach!</h3>
                    <p className={ fmtClasses(
                        styles.tCenter,
                        styles.widthMax,
                    ) }>
                        A single Reach program incorporates all aspects of a DApp:
                    </p>
                    <ul className={ fmtClasses(
                        styles.tCenter,
                        info.list,
                    ) }>
                        <li>Participant backends are the agents acting on behalf of the principals.</li>
                        <li>Frontends are the technical representation of the interface between the participants and the pricipals.</li>
                        <li>A contract enforces the rules of the program, including the order of operation.</li>
                    </ul>
                    <p className={ fmtClasses(
                        styles.widthMax,
                        styles.tCenter,
                    ) }>Continue to the Docs to learn more...
                        <br />
                        <br />
                        <a href="https://docs.reach.sh/tut/overview/#overview" target="_blank" rel="noreferrer">
                            <button className={ fmtClasses(
                                info.call,
                            ) }>
                                Reach Docs
                            </button>
                        </a>
                    </p>
                </div>
                <br />
                <br />
                <br />
                <div className={ fmtClasses(
                    styles.widthMax,
                    styles.flat,
                ) }>
                    <h2 className={ fmtClasses(info.devsText, styles.widthMax, styles.tCenter) }>Tutorials</h2>
                    <div className={ fmtClasses(
                        styles.widthMax,
                        styles.flex,
                        styles.itemsYCenter,
                        styles.spaceXEvenly,
                        info.tut
                    ) }>
                        <a href="https://docs.reach.sh/tut/rps" target="_blank" rel="noreferrer"
                            className={ fmtClasses(
                                styles.flat,
                                styles.flex,
                                styles.itemsCenter,
                                styles.centerText,
                                styles.flipCard,
                                info.lTut,
                            ) }>
                            <div className={ fmtClasses(styles.flipCardInner) }>
                                <div className={ fmtClasses(styles.flipCardFront, info.bgDark) }>
                                    <h4>Rock, Paper, Scissors</h4>
                                </div>
                                <div className={ fmtClasses(styles.flipCardBack, info.bgDark) }>
                                    <span className={ fmtClasses(styles.widthMax, styles.info, info.tSmall) }>This tutorial walks through the creation of a simple decentralized application. It contains everything you need to know to build and test this application and assumes no prior experience with DApp/blockchain development of any kind.</span>
                                </div>
                            </div>
                        </a>
                        <a href="https://docs.reach.sh/tut/wfs" target="_blank" rel="noreferrer"
                            className={ fmtClasses(
                                styles.flat,
                                styles.flex,
                                styles.itemsCenter,
                                styles.centerText,
                                styles.flipCard,
                                info.lTut,
                            ) }>
                            <div className={ fmtClasses(styles.flipCardInner) }> <div className={ fmtClasses(styles.flipCardFront, info.bgDark) }>
                                <h4>Wisdom for Sale</h4>
                            </div>
                                <div className={ fmtClasses(styles.flipCardBack, info.bgDark) }>
                                    <span className={ fmtClasses(styles.widthMax, styles.info, info.tSmall) }>Wisdom for Sale is a command-line and Web-based application that enables two participants (a seller and a buyer) to trade wise expressions for tokens via a Reach Decentralized Application (DApp).</span>
                                </div>
                            </div>
                        </a>
                        <a href="https://docs.reach.sh/tut/rsvp" target="_blank" rel="noreferrer"
                            className={ fmtClasses(
                                styles.flat,
                                styles.flex,
                                styles.itemsCenter,
                                styles.centerText,
                                styles.flipCard,
                                info.lTut,
                            ) }>
                            <div className={ fmtClasses(styles.flipCardInner) }>
                                <div className={ fmtClasses(styles.flipCardFront, info.bgDark) }>
                                    <h4>Répondez S'il Vous Plaît</h4>
                                </div>
                                <div className={ fmtClasses(styles.flipCardBack, info.bgDark) }>
                                    <span className={ fmtClasses(styles.widthMax, styles.info, info.tSmall) }> This tutorial walks through the creation of a simple, but real, decentralized application. It assumes a basic familiarity with Reach, as though you've gone Rock, Paper, Scissors! tutorial, but does not dwell on intimate details of it. Similarly, it assumes that you have Reach installed and are comfortable using it.</span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <div className={ fmtClasses(
                    styles.widthMax,
                    styles.flat,
                ) }>
                    <h2 className={ fmtClasses(info.devsText, styles.widthMax, styles.tCenter) }>Reach Official</h2>
                    <br />
                    <div className={ fmtClasses(
                        styles.widthMax,
                        info.reachDiv,
                    ) }></div>
                    <p className={ fmtClasses(
                        styles.widthMax,
                        styles.tCenter,
                    ) }>Have access to all information about the Reach Platform from the Official website.
                        <br />
                        <br />
                        <a href="https://bit.ly/3GJm5ep" target="_blank" rel="noreferrer">
                            <button className={ fmtClasses(
                                info.call,
                            ) }>
                                Visit
                            </button>
                        </a>
                    </p>
                </div>
                <br />
                <br />
                <br />
                <div className={ fmtClasses(
                    styles.widthMax,
                    styles.flat,
                ) }>
                    <h2 className={ fmtClasses(info.devsText, styles.widthMax, styles.tCenter) }>Reach out!</h2>
                    <p className={ fmtClasses(
                        styles.widthMax,
                        styles.tCenter,
                    ) }>
                        Stay connected with the Reach Platform and its growing number of active developers on the following social media platforms.
                    </p>
                    <div className={ fmtClasses(
                        styles.widthMax,
                        styles.tCenter,
                        styles.flex,
                        styles.itemsYCenter,
                        styles.spaceXEvenly,
                    ) }>
                        <a href="https://youtube.com/c/Reachsh" target="_blank" rel="noreferrer" className={ fmtClasses(
                            styles.flex,
                            styles.directionY,
                            styles.itemsStart,
                            styles.itemsYCenter,
                            info.socialLinks,
                        ) }>
                            <div className={ fmtClasses(
                                info.icon,
                                info.youtube,
                            ) }></div>
                            <span className={ fmtClasses(
                                styles.widthMax,
                                styles.dInlineBlock,
                                styles.tCenter,
                            ) }>YouTube</span>
                        </a>
                        <a href="https://twitter.com/reachlang" target="_blank" rel="noreferrer" className={ fmtClasses(
                            styles.flex,
                            styles.directionY,
                            styles.itemsStart,
                            styles.itemsYCenter,
                            info.socialLinks,
                        ) }>
                            <div className={ fmtClasses(
                                info.icon,
                                info.twitter,
                            ) }></div>
                            <span className={ fmtClasses(
                                styles.widthMax,
                                styles.dInlineBlock,
                                styles.tCenter,
                            ) }>Twitter</span>
                        </a>
                        <a href="https://bit.ly/34nuaZu" target="_blank" rel="noreferrer" className={ fmtClasses(
                            styles.flex,
                            styles.directionY,
                            styles.itemsStart,
                            styles.itemsYCenter,
                            info.socialLinks,
                        ) }>
                            <div className={ fmtClasses(
                                info.icon,
                                info.linkedIn,
                            ) }></div>
                            <span className={ fmtClasses(
                                styles.widthMax,
                                styles.dInlineBlock,
                                styles.tCenter,
                            ) }>LinkedIn</span>
                        </a>
                        <a href="https://bit.ly/3BnPyKd" target="_blank" rel="noreferrer" className={ fmtClasses(
                            styles.flex,
                            styles.directionY,
                            styles.itemsStart,
                            styles.itemsYCenter,
                            info.socialLinks,
                        ) }>
                            <div className={ fmtClasses(
                                info.icon,
                                info.discord,
                            ) }></div>
                            <span className={ fmtClasses(
                                styles.widthMax,
                                styles.dInlineBlock,
                                styles.tCenter,
                            ) }>Discord</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoCenter;