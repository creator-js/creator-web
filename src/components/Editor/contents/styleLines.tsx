import {
    closeCurlyBracket,
    colon,
    componentName,
    ILine,
    openCurlyBracket
} from "@site/src/components/Editor/contents/commonLines";

export const styleLines: ILine[] = [
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
                content: '""',
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
