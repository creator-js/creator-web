import React, {useContext} from 'react';
import styles from './EditorHeader.module.css';
import {clsx} from 'clsx'
import {EditorContext} from "@site/src/components/Editor/InteractiveEditor/InteractiveEditor";
import {steps} from "@site/src/components/Editor/steps";

export const EditorHeader = () => {

    const {step} = useContext(EditorContext);

    const tabs = [
        {
            label: 'creator.config.js',
            appearOnStep: 0
        },
        {
            label: 'component.js',
            appearOnStep: 6
        },
        {
            label: 'style.js',
            appearOnStep: 7
        },
        {
            label: 'Atom.jsx',
            appearOnStep: 11
        },
        {
            label: 'service.js',
            appearOnStep: 13
        },
        {
            label: 'api.js',
            appearOnStep: 17
        },
        {
            label: 'Molecule.jsx',
            appearOnStep: 30
        }
    ];

    const tabsJSX = tabs
        .filter((t) => t.appearOnStep <= step)
        .map((t) => {
            const active = steps[step].file === t.label ? styles['editor__header-tab--active'] : '';
            const classes = clsx(styles['editor__header-tab'], active);

            return <div className={classes} key={t.label}>{t.label}</div>
        })

    return (
        <div className={styles['editor__header']}>
            {tabsJSX}
        </div>
    );
};
