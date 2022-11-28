import {closeCurlyBracket, ILine} from "@site/src/components/Editor/contents/common";

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
    ...getApi('getData', 17),
    {
        depth: 0,
        appearOnStep: 20,
        elements: [
            {
                content: '',
                token: 'empty'
            }
        ]
    },
    ...getApi('getAnotherData', 20),
]
