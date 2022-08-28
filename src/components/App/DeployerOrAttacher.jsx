import React from 'react';
import { useReach, fmtClasses } from "../../hooks";
import styles from "../../styles/Shared.module.css";

const DeployerOrAttacher = () => {
    const { selectDeployer, selectAttacher } = useReach();

    return (
        <div className={ fmtClasses(styles.container, styles.itemsCenter) }>
            <h3 className={ fmtClasses(styles.infoText) } >
                Select a Role
            </h3>
            <div className={ fmtClasses(styles.container, styles.flex, styles.gap10, styles.itemsCenter) }>
                <div
                    className={ fmtClasses(
                        styles.flat,
                        styles.flex,
                        styles.itemsCenter,
                        styles.centerText,
                        styles.directionY,
                        styles.flipCard,
                    ) }
                    onClick={ () => selectDeployer() }>
                    <div className={ fmtClasses(styles.flipCardInner) }>
                        <div className={ fmtClasses(styles.flipCardFront) }>
                            <h4>Deployer</h4>
                        </div>
                        <div className={ fmtClasses(styles.flipCardBack) }>
                            <span className={ fmtClasses(styles.widthMax, styles.info) }> Deploy a contract.</span>
                        </div>
                    </div>
                </div>
                <div
                    className={ fmtClasses(
                        styles.flat,
                        styles.flex,
                        styles.itemsCenter,
                        styles.centerText,
                        styles.flipCard,
                    ) }
                    onClick={ () => selectAttacher() }>
                    <div className={ fmtClasses(styles.flipCardInner) }>
                        <div className={ fmtClasses(styles.flipCardFront) }>
                            <h4>Attacher</h4>
                        </div>
                        <div className={ fmtClasses(styles.flipCardBack) }>
                            <span className={ fmtClasses(styles.widthMax, styles.info) }> Attach to Deployer's contract and make proposals.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeployerOrAttacher;