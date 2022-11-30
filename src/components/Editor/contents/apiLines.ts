import {closeCurlyBracket, ILine} from "@site/src/components/Editor/contents/commonLines";

const getApi = (serviceName: string, step): ILine[] => {
    return [
        {
            depth: 0,
            appearOnStep: step,
            elements: [
                {
                    content: 'export const ',
                    token: 'orange'
                },
                {
                    content: `${serviceName} `,
                    token: 'yellow'
                },
                {
                    content: ' = () => {',
                    token: 'white'
                }
            ]
        },
        {
            depth: 1,
            appearOnStep: step,
            elements: [
                {
                    content: 'return ',
                    token: 'orange'
                },
                {
                    content: 'fetch',
                    token: 'yellow'
                },
                {
                    content: '(',
                    token: 'white'
                },
                {
                    content: `"/${serviceName}"`,
                    token: 'green'
                },
                {
                    content: ')',
                    token: 'white'
                },
                {
                    content: ';',
                    token: 'orange'
                }
            ]
        },
        {
            depth: 0,
            appearOnStep: step,
            elements: [
                closeCurlyBracket,
                {
                    content: ';',
                    token: 'orange'
                }
            ]
        }
    ]
}

export const apiLines: ILine[] = [
    ...getApi('getData', 18),
    {
        depth: 0,
        appearOnStep: 21,
        elements: [
            {
                content: '',
                token: 'empty'
            }
        ]
    },
    ...getApi('getAnotherData', 21),
    {
        depth: 0,
        appearOnStep: 21,
        elements: [
            {
                content: '',
                token: 'empty'
            }
        ]
    },
    ...getApi('getMolecules', 32),
]
