import React from "react";

const ProposalWrapper = ({ children }) => {
    return (
        <div>
            <h1>proposals</h1>
            { children }
        </div>
    );
};

export default ProposalWrapper;