import React from "react";
import { useClasses } from "../../hooks";

const Wrapper = ({ children }) => {
    return (
        <div>
            <div className={ useClasses("App") }>
                <header className={ useClasses("App-header") } id="root">
                    <h1>Reach Dao</h1>
                    { children }
                </header>
            </div>
        </div>
    );
};

export default Wrapper;