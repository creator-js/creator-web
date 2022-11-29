import {
    closeBracket,
    closeCurlyBracket,
    colon, comma,
    componentName,
    ILine, openBracket,
    openCurlyBracket, serviceName
} from "@site/src/components/Editor/contents/commonLines";


const updates: ILine[] = [
    {
        depth: 2,
        appearOnStep: 14,
        elements: [
            {
                content: 'updates',
                token: 'purple'
            },
            ...colon,
            openBracket
        ]
    },
    {
        depth: 3,
        appearOnStep: 14,
        elements: [
            openCurlyBracket
        ]
    },
    // Open
    {
        depth: 4,
        appearOnStep: 14,
        elements: [
            {
                content: 'direction',
                token: 'purple'
            },
            ...colon,
            {
                content: '"up"',
                token: 'green'
            },
            {
                content: ',',
                token: 'orange'
            }
        ]
    },
    {
        depth: 4,
        appearOnStep: 14,
        elements: [
            {
                content: 'searchFor',
                token: 'purple'
            },
            ...colon,
            openBracket,
            {
                content: '"includes"',
                token: 'green'
            },
            comma,
            {
                content: '',
                token: 'empty'
            },
            {
                content: '"};"',
                token: 'green'
            },
            closeBracket,
            comma
        ]
    },
    {
        depth: 4,
        appearOnStep: 14,
        elements: [
            {
                content: 'changeWith',
                token: 'purple'
            },
            ...colon,
            {
                content: '`};',
                token: 'green'
            },
            {
                content: '\\n\\n',
                token: 'orange'
            },
            {
                content: '${serviceString}',
                token: 'white'
            },
            {
                content: '`',
                token: 'green'
            }
        ]
    },
    // Close
    {
        depth: 3,
        appearOnStep: 14,
        elements: [
            closeCurlyBracket
        ]
    },
    {
        depth: 2,
        appearOnStep: 14,
        elements: [
            closeBracket
        ]
    },
]

export const serviceLines: ILine[] = [
    {
        depth: 0,
        appearOnStep: 13,
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
        appearOnStep: 13,
        elements: [
            {
                content: 'const ',
                token: 'orange'
            },
            {
                content: 'serviceString = ',
                token: 'white'
            },
            {
                content: '`export const ',
                token: 'green'
            },
            ...serviceName,
            {
                content: ' = () => {',
                token: 'green'
            }
        ]
    },
    {
        depth: 2,
        appearOnStep: 13,
        elements: [
            {
                content: 'return fetch("/',
                token: 'green'
            },
            ...serviceName,
            {
                content: '");',
                token: 'green'
            }
        ]
    },
    {
        depth: 1,
        appearOnStep: 13,
        elements: [
            {
                content: '};`',
                token: 'green'
            },
            {
                content: ';',
                token: 'orange'
            }
        ]
    },
    {
        depth: 0,
        appearOnStep: 13,
        elements: [
            {
                content: '',
                token: 'empty'
            }
        ]
    },
    {
        depth: 1,
        appearOnStep: 13,
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
        appearOnStep: 13,
        elements: [
            {
                content: 'init',
                token: 'purple'
            },
            ...colon,
            {
                content: 'serviceString',
                token: 'white'
            }
        ]
    },
    ...updates,
    {
        depth: 1,
        appearOnStep: 13,
        elements: [closeCurlyBracket]
    },
    {
        depth: 0,
        appearOnStep: 13,
        elements: [closeCurlyBracket]
    }
]
