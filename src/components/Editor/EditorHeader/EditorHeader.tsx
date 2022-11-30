import React, {useCallback, useContext} from 'react';
import styles from './EditorHeader.module.css';
import {clsx} from 'clsx'
import {EditorContext} from "@site/src/components/Editor/InteractiveEditor/InteractiveEditor";

export const EditorHeader = () => {

    const {step, currentFileId, setCurrentFileId} = useContext(EditorContext);

    const onSetCurrentFileId = useCallback((fileId: string) => {
        return () => {
            setCurrentFileId(fileId);
        }
    }, [setCurrentFileId, step]);

    const tabs = [
        {
            id: 'f_creator.config.js',
            label: 'creator.config.js',
            appearOnStep: 0
        },
        {
            id: 't_component.js',
            label: 'component.js',
            appearOnStep: 6
        },
        {
            id: 't_style.js',
            label: 'style.js',
            appearOnStep: 7
        },
        {
            id: 'f_atom.jsx',
            label: 'Atom.jsx',
            appearOnStep: 11
        },
        {
            id: 't_service.js',
            label: '_templates/../service.js',
            appearOnStep: 13
        },
        {
            id: 'f_service.js',
            label: 'src/../service.js',
            appearOnStep: 17
        },
        {
            id: 'f_molecule.jsx',
            label: 'Molecule.jsx',
            appearOnStep: 30
        }
    ];

    const tabsJSX = tabs
        .filter((t) => t.appearOnStep <= step)
        .map((t) => {
            const active = currentFileId === t.id ? styles['editor__header-tab--active'] : '';
            const classes = clsx(styles['editor__header-tab'], active);

            return <div className={classes} key={t.id} onClick={onSetCurrentFileId(t.id)}>{t.label}</div>
        })

    return (
        <div className={styles['editor__header']}>
            {tabsJSX}
        </div>
    );
};
