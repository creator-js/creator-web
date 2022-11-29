import React, {ReactNode, useCallback, useContext} from 'react';
import styles from './FolderStructure.module.css';
import {clsx} from 'clsx'
import {EditorContext} from "@site/src/components/Editor/InteractiveEditor/InteractiveEditor";
import {steps} from "@site/src/components/Editor/steps";

const FolderSvg = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path
            d="M20 5h-9.586L8.707 3.293A.997.997 0 0 0 8 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2z"></path>
    </svg>
)

const FileJSSvg = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path
            d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-2.745 14.186c0 1.345-.644 1.814-1.681 1.814-.245 0-.567-.042-.777-.112l.119-.861c.147.049.336.084.546.084.448 0 .729-.203.729-.938v-2.97h1.064v2.983zm2.043 1.807c-.539 0-1.071-.141-1.337-.287l.217-.883c.287.147.729.294 1.184.294.491 0 .749-.203.749-.511 0-.295-.224-.463-.791-.666-.784-.272-1.295-.707-1.295-1.394 0-.806.672-1.422 1.786-1.422.533 0 .925.112 1.205.238l-.238.861c-.189-.091-.525-.224-.987-.224s-.687.21-.687.455c0 .301.267.435.875.665.834.309 1.226.742 1.226 1.408-.002.793-.61 1.466-1.907 1.466zM14 9h-1V4l5 5h-4z"></path>
    </svg>
)
const FileCSSSvg = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path
            d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM9.446 17.412c.275 0 .581-.061.762-.132l.138.713c-.168.084-.546.174-1.037.174-1.397 0-2.117-.869-2.117-2.021C7.191 14.768 8.175 14 9.398 14c.474 0 .833.096.995.18l-.186.726a1.98 1.98 0 0 0-.768-.149c-.726 0-1.29.438-1.29 1.337.001.808.482 1.318 1.297 1.318zm2.491.755c-.461 0-.917-.119-1.145-.245l.186-.756c.246.126.624.252 1.014.252.42 0 .642-.174.642-.438 0-.252-.192-.396-.678-.57-.672-.234-1.109-.605-1.109-1.193 0-.689.575-1.217 1.529-1.217.455 0 .791.096 1.031.203l-.204.738a1.919 1.919 0 0 0-.846-.192c-.396 0-.587.181-.587.39 0 .258.228.372.749.57.714.264 1.05.636 1.05 1.205-.001.678-.523 1.253-1.632 1.253zm3.24 0c-.461 0-.917-.119-1.145-.245l.186-.756c.246.126.624.252 1.014.252.42 0 .642-.174.642-.438 0-.252-.192-.396-.678-.57-.672-.234-1.109-.605-1.109-1.193 0-.689.575-1.217 1.529-1.217.455 0 .791.096 1.031.203l-.204.738a1.919 1.919 0 0 0-.846-.192c-.396 0-.587.181-.587.39 0 .258.228.372.749.57.714.264 1.05.636 1.05 1.205 0 .678-.523 1.253-1.632 1.253zM14 9h-1V4l5 5h-4z"></path>
    </svg>
)

const FileJSONSvg = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path
            d="M12.823 15.122c-.517 0-.816.491-.816 1.146 0 .661.311 1.126.82 1.126.517 0 .812-.49.812-1.146 0-.604-.291-1.126-.816-1.126z"></path>
        <path
            d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM8.022 16.704c0 .961-.461 1.296-1.2 1.296-.176 0-.406-.029-.557-.08l.086-.615c.104.035.239.06.391.06.319 0 .52-.145.52-.67v-2.122h.761v2.131zm1.459 1.291c-.385 0-.766-.1-.955-.205l.155-.631c.204.105.521.211.846.211.35 0 .534-.146.534-.365 0-.211-.159-.331-.564-.476-.562-.195-.927-.506-.927-.996 0-.576.481-1.017 1.277-1.017.38 0 .659.08.861.171l-.172.615c-.135-.065-.375-.16-.705-.16s-.491.15-.491.325c0 .215.19.311.627.476.596.22.876.53.876 1.006.001.566-.436 1.046-1.362 1.046zm3.306.005c-1.001 0-1.586-.755-1.586-1.716 0-1.012.646-1.768 1.642-1.768 1.035 0 1.601.776 1.601 1.707C14.443 17.33 13.773 18 12.787 18zm4.947-.055h-.802l-.721-1.302a12.64 12.64 0 0 1-.585-1.19l-.016.005c.021.445.031.921.031 1.472v1.016h-.701v-3.373h.891l.701 1.236c.2.354.4.775.552 1.155h.014c-.05-.445-.065-.9-.065-1.406v-.985h.702v3.372zM14 9h-1V4l5 5h-4z"></path>
    </svg>
)

export interface IFolderItem {
    label: string;
    level: number;
    icon: ReactNode;
    appearOnStep: number;
    active?: [number, number]
}

export const FolderStructure = () => {

    const {step} = useContext(EditorContext);

    const folders: IFolderItem[] = [
        {
            label: 'My project',
            level: 0,
            icon: FolderSvg(),
            appearOnStep: 0
        },
        {
            label: '_templates',
            level: 1,
            icon: FolderSvg(),
            appearOnStep: 6
        },
        {
            label: 'components',
            level: 2,
            icon: FolderSvg(),
            appearOnStep: 6
        },
        {
            label: 'component.js',
            level: 3,
            icon: FileJSSvg(),
            appearOnStep: 6
        },
        {
            label: 'style.js',
            level: 3,
            icon: FileJSSvg(),
            appearOnStep: 7
        },
        {
            label: 'services',
            level: 2,
            icon: FolderSvg(),
            appearOnStep: 6
        },
        {
            label: 'service.js',
            level: 3,
            icon: FileJSSvg(),
            appearOnStep: 13
        },
        {
            label: 'src',
            level: 1,
            icon: FolderSvg(),
            appearOnStep: 0
        },
        {
            label: 'Atom',
            level: 2,
            icon: FolderSvg(),
            appearOnStep: 11
        },
        {
            label: 'Atom.jsx',
            level: 3,
            icon: FileJSSvg(),
            appearOnStep: 11
        },
        {
            label: 'Atom.css',
            level: 3,
            icon: FileCSSSvg(),
            appearOnStep: 11
        },
        {
            label: 'Molecule',
            level: 2,
            icon: FolderSvg(),
            appearOnStep: 30
        },
        {
            label: 'Molecule.jsx',
            level: 3,
            icon: FileJSSvg(),
            appearOnStep: 30
        },
        {
            label: 'Molecule.css',
            level: 3,
            icon: FileCSSSvg(),
            appearOnStep: 30
        },
        {
            label: 'services',
            level: 2,
            icon: FolderSvg(),
            appearOnStep: 17
        },
        {
            label: 'api.js',
            level: 3,
            icon: FileJSSvg(),
            appearOnStep: 17
        },
        {
            label: 'creator.config.js',
            level: 1,
            icon: FileJSSvg(),
            appearOnStep: 0
        },
        {
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
        const c3 = steps[step].file === f.label ? styles['item__name--active'] : '';

        return (
            <div key={f.label + i} className={clsx(c1, c2, c3)}>
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
