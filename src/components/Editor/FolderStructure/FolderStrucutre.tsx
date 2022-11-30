import React, {ReactNode, useCallback, useContext} from 'react';
import styles from './FolderStructure.module.css';
import {clsx} from 'clsx'
import {EditorContext} from "@site/src/components/Editor/InteractiveEditor/InteractiveEditor";
import {LinesMap, steps} from "@site/src/components/Editor/steps";
import {FileCSSSvg, FileJSONSvg, FileJSSvg, FolderSvg} from "@site/src/assets/icons";

export interface IFolderItem {
    id: string;
    label: string;
    level: number;
    icon: ReactNode;
    appearOnStep: number;
    active?: [number, number]
}

export const FolderStructure = () => {

    const { step, currentFileId, setCurrentFileId } = useContext(EditorContext);

    const onSetCurrentFileId = useCallback((fileId: string) => {
        return () => {
            if (!(fileId in LinesMap)) {
                return;
            }

            setCurrentFileId(fileId);
        }
    }, [setCurrentFileId, step]);

    const folders: IFolderItem[] = [
        {
            id: 'my_project',
            label: 'My project',
            level: 0,
            icon: FolderSvg(),
            appearOnStep: 0
        },
        {
            id: '_templates',
            label: '_templates',
            level: 1,
            icon: FolderSvg(),
            appearOnStep: 7
        },
        {
            id: 't_components',
            label: 'components',
            level: 2,
            icon: FolderSvg(),
            appearOnStep: 7
        },
        {
            id: 't_component.js',
            label: 'component.js',
            level: 3,
            icon: FileJSSvg(),
            appearOnStep: 7
        },
        {
            id: 't_style.js',
            label: 'style.js',
            level: 3,
            icon: FileJSSvg(),
            appearOnStep: 8
        },
        {
            id: 't_services',
            label: 'services',
            level: 2,
            icon: FolderSvg(),
            appearOnStep: 14
        },
        {
            id: 't_service.js',
            label: 'service.js',
            level: 3,
            icon: FileJSSvg(),
            appearOnStep: 14
        },
        {
            id: 'src',
            label: 'src',
            level: 1,
            icon: FolderSvg(),
            appearOnStep: 0
        },
        {
            id: 'components',
            label: 'components',
            level: 2,
            icon: FolderSvg(),
            appearOnStep: 12
        },
        {
            id: 'f_atom',
            label: 'Atom',
            level: 3,
            icon: FolderSvg(),
            appearOnStep: 12
        },
        {
            id: 'f_atom.jsx',
            label: 'Atom.jsx',
            level: 4,
            icon: FileJSSvg(),
            appearOnStep: 12
        },
        {
            id: 'f_atom.css',
            label: 'Atom.css',
            level: 4,
            icon: FileCSSSvg(),
            appearOnStep: 12
        },
        {
            id: 'f_molecule',
            label: 'Molecule',
            level: 3,
            icon: FolderSvg(),
            appearOnStep: 31
        },
        {
            id: 'f_molecule.jsx',
            label: 'Molecule.jsx',
            level: 4,
            icon: FileJSSvg(),
            appearOnStep: 31
        },
        {
            id: 'f_molecule.css',
            label: 'Molecule.css',
            level: 4,
            icon: FileCSSSvg(),
            appearOnStep: 31
        },
        {
            id: 'f_services',
            label: 'services',
            level: 2,
            icon: FolderSvg(),
            appearOnStep: 18
        },
        {
            id: 'f_service.js',
            label: 'service.js',
            level: 3,
            icon: FileJSSvg(),
            appearOnStep: 18
        },
        {
            id: 'f_creator.config.js',
            label: 'creator.config.js',
            level: 1,
            icon: FileJSSvg(),
            appearOnStep: 0
        },
        {
            id: 'f_package.json',
            label: 'package.json',
            level: 1,
            icon: FileJSONSvg(),
            appearOnStep: 0
        }
    ];

    const foldersJSX = folders
        .filter((f: IFolderItem) => f.appearOnStep <= step)
        .map((f: IFolderItem, i: number) => {

        const c1 = styles['item__name'];
        const c2 = styles[`p-${f.level}`];
        const c3 = currentFileId === f.id ? styles['item__name--active'] : '';

        return (
            <div key={f.id} className={clsx(c1, c2, c3)} onClick={onSetCurrentFileId(f.id)}>
                {f.icon}
                {f.label}
            </div>
        )
    })

    return (
        <div className={styles['folder-structure']}>
            {foldersJSX}
        </div>
    );
};
