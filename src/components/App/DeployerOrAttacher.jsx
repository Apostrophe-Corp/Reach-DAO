import React from 'react';
import { useReach } from "../../hooks/useReach";

const DeployerOrAttacher = () => {
    const { selectDeployer, selectAttacher } = useReach();

    return (
        <div>
            Please select a role:
            <br />
            <p>
                <button onClick={ () => selectDeployer() }>Deployer</button>
                <br /> Deploy a contract with a timeout of your choice.
            </p>
            <p>
                <button onClick={ () => selectAttacher() }>Attacher</button>
                <br /> Attach to Deployer's contract and make proposals.
            </p>
        </div>
    );
};

return default DeployerOrAttacher;