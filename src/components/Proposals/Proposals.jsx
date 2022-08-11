import React, { useState } from "react";
import { useReach } from "../../hooks";

const Proposals = () => {
    const { setContract, connectAndContribute } = useReach();
    const [proposals, setProposals] = useState([
        {
            title: 'Proposal 1',
            link: 'https://github.com/Aro1914/AroTable/blob/main/README.md',
            staked: 100,
            description: `A self-sorting number data structure`,
            owner: 'https://github.com/Aro1914',
            contract: "someContractString",
        },
        {
            title: 'Proposal 2',
            link: 'https://github.com/Aro1914/Coffee-Shop/blob/main/README.md',
            staked: 100,
            description: `Not your regular coffee shop`,
            owner: 'https://github.com/Aro1914',
            contract: "someContractString",
        },
        {
            title: 'Proposal 3',
            link: 'https://github.com/Aro1914/Trivia-API/blob/main/README.md',
            staked: 100,
            description: `A quiz API`,
            owner: 'https://github.com/Aro1914',
            contract: "someContractString",
        },
        {
            title: 'Proposal 4',
            link: 'https://github.com/Aro1914/Fyyur-Project/blob/main/README.md',
            staked: 100,
            description: `A platform for musical artists to book musical venues`,
            owner: 'https://github.com/Aro1914',
            contract: "someContractString",
        },
        {
            title: 'Proposal 5',
            link: 'https://github.com/Aro1914/Rock-Paper-Scissors-with-Reach/blob/main/README.md',
            staked: 100,
            description: `An implementation of the fun but sometimes intense game of Rock, Paper, Scissors`,
            owner: 'https://github.com/Aro1914',
            contract: "someContractString",
        },
        {
            title: 'Proposal 6',
            link: 'https://github.com/AroTable-For-Server-Side/AroTable/blob/main/README.md',
            staked: 100,
            description: `A self-sorting number data structure (For Server Side)`,
            owner: 'https://github.com/Aro1914',
            contract: "someContractString",
        },
    ]);

    return (
        <div>
            {
                proposals.map((el, i) => {
                    return (
                        <div key={ i }>
                            <h3>{ el.title }</h3>
                            <ul>
                                <li>Owner: { el.owner }</li>
                                <li>Staked Tokens: { el.staked }</li>
                                <li><a href={ el.link } target="_blank" rel="noreferrer">View proposal README</a></li>
                                <li>
                                    <p>
                                        { el.description }
                                    </p>
                                </li>
                            </ul>
                            <button onClick={ () => {
                                const ctcInfoStr = el.contract;
                                setContract({ ctcInfoStr });
                                connectAndContribute();
                            } }>Contribute to this proposal</button>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default Proposals;