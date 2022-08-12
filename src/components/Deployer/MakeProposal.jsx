import React, { useState } from "react";
import Select from "react-select";
import 'bootstrap/dist/css/bootstrap.css';
import { useClasses, useReach } from "../../hooks";

const MakeProposal = () => {
    const [inputs, setInputs] = useState({});
    const { makeProposal } = useReach();

    const handleOnChange = (e) => {
        const name = e.currentTarget.name;
        const value = e.currentTarget.value;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    };

    const handleSelectChange = (selectedOption) => {
        setInputs(inputs => ({ ...inputs, network: selectedOption }));
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
            <label htmlFor="stake">
                <span>
                    Amount you which you wish to stake for the proposal
                </span>
                <input
                    id="stake"
                    type="number"
                    name="stake"
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
            <label htmlDor></label>
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
                />
            </label>
            <label htmlFor="deadline">
                <input
                    id="deadline"
                    type="number"
                    name="deadline"
                    placeholder="Enter in blocks"
                    onChange={ handleOnChange }
                />
            </label>

            <button onClick={ () => makeProposal(inputs.network, inputs.deadline) }>Make Proposal</button>
        </div>
    );
};

export default MakeProposal;