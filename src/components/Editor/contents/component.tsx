import {
    closeCurlyBracket,
    colon,
    componentName,
    ILine,
    openCurlyBracket
} from "@site/src/components/Editor/contents/common";

export const componentLines: ILine[] = [
    {
        depth: 0,
        appearOnStep: 0,
        elements: [
            {
                content: 'export default',
                token: 'orange'
            },
            {
                content: '',
                token: 'empty'
            },
            {
                content: '(answers) => {',
                token: 'white'
            }
        ]
    },
    {
        depth: 1,
        appearOnStep: 0,
        elements: [
            {
                content: 'return',
                token: 'orange'
            },
            {
                content: '',
                token: 'empty'
            },
            openCurlyBracket
        ]
    },
    {
        depth: 2,
        appearOnStep: 0,
        elements: [
            {
                content: 'init',
                token: 'purple'
            },
            ...colon,
            {
                content: '`import React from \'react\';',
                token: 'green'
            }
        ]
    },
    {
        depth: 4,
        appearOnStep: 0,
        elements: [
            {
                content: 'import \'./',
                token: 'green'
            },
            ...componentName,
            {
                content: '.css\';',
                token: 'green'
            }
        ]
    },
    {
        depth: 4,
        appearOnStep: 0,
        elements: [
            {
                content: '',
                token: 'empty'
            },
        ]
    },
    {
        depth: 4,
        appearOnStep: 0,
        elements: [
            {
                content: 'export const ',
                token: 'green'
            },
            ...componentName,
            {
                content: ' = () => {',
                token: 'green'
            }
        ]
    },
    {
        depth: 5,
        appearOnStep: 0,
        elements: [
            {
                content: 'return <></>;',
                token: 'green'
            }
        ]
    },
    {
        depth: 4,
        appearOnStep: 0,
        elements: [
            {
                content: '}`',
                token: 'green'
            }
        ]
    },
    {
        depth: 1,
        appearOnStep: 0,
        elements: [closeCurlyBracket]
    },
    {
        depth: 0,
        appearOnStep: 0,
        elements: [closeCurlyBracket]
    }
]
