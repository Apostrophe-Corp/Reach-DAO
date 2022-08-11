import React from "react";
import { useReach } from "../../hooks";

const Deploy = () => {
    const { deploy, setTokenSupply, defaultTokenSupply } = useReach();
    return (
        <div>
            <h1>Welcome Admin <br />
                Launch Tokens to Deploy
            </h1>
            <h2>How much Reach Tokens would we be launching today?</h2>
            <input
                type="number"
                placeholder={ defaultTokenSupply }
                onChange={ (e) => setTokenSupply(e.currentTarget.value) }
            />
            <button onClick={ () => deploy() }>Deploy</button>
        </div>
    );
};

export default Deploy;