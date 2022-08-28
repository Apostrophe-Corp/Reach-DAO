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
                        A hub for Web3 professionals.<br /><br />We connect talent with work tutorials and ideas.<br />
                        The community gets to have their ideas built and reach Lang  developers get to gain experience working on real world projects, gaining experience and up to date information about everything Reach.
                    </p>
                </div>
            </div>
            <h1 className={ fmtClasses(info.devsText, styles.widthMax, styles.tCenter) }>Devs</h1>
            <div className={ fmtClasses(styles.container, styles.itemsCenter) }></div>
            <div className={ fmtClasses(styles.widthMax) }>
                <h2 className={ fmtClasses(styles.widthMax) }>The Language</h2>
                <p className={ fmtClasses(
                    styles.widthMax,
                    styles.tCenter,
                ) }>

                </p>
            </div>
        </div>
    );
};

export default InfoCenter;