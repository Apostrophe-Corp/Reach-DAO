import React, { useState } from "react";
import { fmtClasses, useReach } from "../../hooks";
import styles from '../../styles/Shared.module.css';

const MakeProposal = () => {
    const [inputs, setInputs] = useState({});
    const { makeProposal, proposals, user, setViews } = useReach();

    const handleOnChange = (e) => {
        const name = e.currentTarget.name;
        let value = e.currentTarget.value;
        if (name === 'title') {
            if (value.length > 25) {
                value = String(value).slice(0, 25);
                e.currentTarget.value = value;
            }
        }

        if (name === 'link') {
            if (value.length > 150) {
                value = String(value).slice(0, 150);
                e.currentTarget.value = value;
            }
        }

        if (name === 'description') {
            if (value.length > 180) {
                value = String(value).slice(0, 180);
                e.currentTarget.value = value;
            }
        }

        setInputs(inputs => ({ ...inputs, [name]: value }));
    };

    const makeAndUpdateProposals = async () => {
        // The proposal
        const proposal = {
            id: proposals.length > 0 ? proposals.length === 1 ? proposals[0].id + 1 : Number(proposals.reduce((a, b) => a.id > b.id ? a.id : b.id)) + 1 : 1,
            title: inputs['title'],
            link: inputs['link'],
            description: inputs['description'],
            owner: user.account.networkAccount.addr,
        };

        await makeProposal(proposal);
    };

    return (
        <div className={ fmtClasses(styles.container, styles.itemsCenter) }>
            <h2 className={ fmtClasses(styles.infoText, styles.widthMax) }>Enter Proposal Information</h2>
            <label htmlFor="title" className={ fmtClasses(
                styles.widthMax,
                styles.flat,
                styles.container,
                styles.flex,
                styles.itemsCenter,
            ) }>
                <span className={ fmtClasses(
                    styles.widthMax,
                    styles.dInlineBlock,
                ) }>
                    Enter the proposal title (Max 25)
                </span>
                <input
                    spellCheck='true'
                    className={ fmtClasses(
                        styles.field,
                        styles.widthMax,
                    ) }
                    id="title"
                    type="text"
                    name="title"
                    placeholder="Title..."
                    onChange={ handleOnChange }
                />
            </label>
            <label htmlFor="link" className={ fmtClasses(
                styles.widthMax,
                styles.flat,
                styles.container,
                styles.flex,
                styles.itemsCenter,
            ) }>
                <span className={ fmtClasses(
                    styles.widthMax,
                    styles.dInlineBlock,
                ) }>
                    Enter the proposal link (Max 150)
                </span>
                <input
                    spellCheck='false'
                    className={ fmtClasses(
                        styles.field,
                        styles.widthMax,
                    ) }
                    id="link"
                    type="url"
                    name="link"
                    placeholder="Link longer than 150 characters? Use a URL shortener first."
                    onChange={ handleOnChange }
                />
            </label>
            <label htmlFor="description" className={ fmtClasses(
                styles.widthMax,
                styles.flat,
                styles.container,
                styles.flex,
                styles.itemsCenter,
            ) }>
                <span className={ fmtClasses(
                    styles.widthMax,
                    styles.dInlineBlock,
                ) }>
                    Write a short description (Max 180)
                </span>
                <textarea
                    spellCheck='true'
                    className={ fmtClasses(
                        styles.field,
                        styles.widthMax,
                    ) }
                    id="description"
                    name="description"
                    placeholder="If possible, describe your project in one sentence"
                    onChange={ handleOnChange }
                />
            </label>
            <button onClick={ makeAndUpdateProposals } className={ fmtClasses(
                styles.width70,
                styles.actionButton,
                styles.dInlineBlock,
            ) }
                disabled={ !inputs?.['title'] || !inputs?.['link'] || !inputs?.['description'] }
            >Make Proposal</button>
        </div>
    );
};

export default MakeProposal;