import React from 'react';
import { useReach, useClasses } from "../../hooks";
import styles from "../../styles/Shared.module.css";

const DeployerOrAttacher = () => {
    const { selectDeployer, selectAttacher } = useReach();

    return (
        <div className={ useClasses(styles.container, styles.itemsCenter) }>
            <h3 className={ useClasses(styles.infoText) } >
                Select a Role
            </h3>
            <div className={ useClasses(styles.container, styles.flex, styles.gap10, styles.itemsCenter) }>
                <div
                    className={ useClasses(
                        styles.flat,
                        styles.flex,
                        styles.itemsCenter,
                        styles.centerText,
                        styles.directionY,
                        styles.flipCard,
                    ) }
                    onClick={ () => selectDeployer() }>
                    <div className={ useClasses(styles.flipCardInner) }>
                        <div className={ useClasses(styles.flipCardFront) }>
                            <h4>Deployer</h4>
                        </div>
                        <div className={ useClasses(styles.flipCardBack) }>
                            <span className={ useClasses(styles.widthMax, styles.info) }> Deploy a contract.</span>
                        </div>
                    </div>
                </div>
                <div
                    className={ useClasses(
                        styles.flat,
                        styles.flex,
                        styles.itemsCenter,
                        styles.centerText,
                        styles.flipCard,
                    ) }
                    onClick={ () => selectAttacher() }>
                    <div className={ useClasses(styles.flipCardInner) }>
                        <div className={ useClasses(styles.flipCardFront) }>
                            <h4>Attacher</h4>
                        </div>
                        <div className={ useClasses(styles.flipCardBack) }>
                            <span className={ useClasses(styles.widthMax, styles.info) }> Attach to Deployer's contract and make proposals.</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DeployerOrAttacher;