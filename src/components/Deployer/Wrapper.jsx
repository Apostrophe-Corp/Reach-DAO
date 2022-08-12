import React from "react";
import { useClasses } from "../../hooks";

const Wrapper = ({ children }) => {
    return (
        <div className={ useClasses('Deployer') }>
            <h2>Deployer</h2>
            { children }
        </div>
    );
};

export default Wrapper;