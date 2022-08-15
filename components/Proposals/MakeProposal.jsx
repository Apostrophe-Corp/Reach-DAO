import React, { useState } from "react";
import Select from "react-select";
import 'bootstrap/dist/css/bootstrap.css';
import { useClasses, useReach } from "../../hooks";

const MakeProposal = () => {
    const [inputs, setInputs] = useState({});
    const { makeProposal, proposals, setProposals, user, updateProposals } = useReach();

    const handleOnChange = (e) => {
        const name = e.currentTarget.name;
        const value = e.currentTarget.value;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    };

    const handleSelectChange = (selectedOption) => {
        setInputs(inputs => ({ ...inputs, network: selectedOption }));
    };

    const makeAndUpdateProposals = async () => {
        const proposal = {
            id: proposals.reduce((a, b) => a.id > b.id ? a.id : b.id) + 1,
            title: inputs['title'],
            link: inputs['link'],
            description: inputs['description'],
            address: user.account,
        };
        updateProposals([...proposals, {
            id: proposals.reduce((a, b) => a.id > b.id ? a.id : b.id) + 1,
            title: inputs['title'],
            link: inputs['link'],
            description: inputs['description'],
            contractInfo: await makeProposal(proposal),
            address: user.account,
        }]);
        setProposals([...proposals, {
            id: proposals.reduce((a, b) => a.id > b.id ? a.id : b.id) + 1,
            title: inputs['title'],
            link: inputs['link'],
            description: inputs['description'],
            contractInfo: await makeProposal(proposal),
            address: user.account,
        }]);
    };

    const selectOptions = [
        { value: 'ETH', label: 'Ethereum' },
        { value: 'ALGO', label: 'Algorand' },
        { value: 'CFX', label: 'Conflux' },
    ];

    return (
        <div>
            <label htmlFor="title">
                <span>
                    Enter the proposal title
                </span>
                <input
                    id="title"
                    type="text"
                    name="title"
                    placeholder="Title..."
                    onChange={ handleOnChange }
                />
            </label>
            <label htmlFor="link">
                <span>
                    Enter the proposal link
                </span>
                <input
                    id="link"
                    type="url"
                    name="link"
                    placeholder="https://github.com/user/repository/blob/main/README.md"
                    onChange={ handleOnChange }
                />
            </label>
            <label htmlFor="description">
                <span>
                    Write a short description
                </span>
                <textarea
                    id="description"
                    name="description"
                    placeholder="If possible, describe your project in one sentence"
                    onChange={ handleOnChange }
                />
            </label>
            <label htmlFor="staked">
                <span>
                    Amount you which you wish to stake for the proposal
                </span>
                <input
                    id="staked"
                    type="number"
                    name="staked"
                    placeholder="1"
                    onChange={ handleOnChange }
                />
            </label>
            <label htmlFor="name">
                <span>
                    Enter your name
                </span>
                <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="John Doe..."
                    onChange={ handleOnChange }
                />
            </label>
            <label htmlFor="select">
                Choose a network
                <Select
                    className={ useClasses("someClass") }
                    options={ selectOptions }
                    autoFocus={ false }
                    onChange={ handleSelectChange }
                />
            </label>
            <label htmlFor="deadline">
                Set a Deadline
                <input
                    id="deadline"
                    type="number"
                    name="deadline"
                    placeholder="Enter deadline in blocks"
                    onChange={ handleOnChange }
                />
            </label>

            <button onClick={ () => makeAndUpdateProposals }>Make Proposal</button>
        </div>
    );
};

export default MakeProposal;