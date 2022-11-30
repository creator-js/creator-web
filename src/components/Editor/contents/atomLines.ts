import {closeCurlyBracket, ILine} from "@site/src/components/Editor/contents/commonLines";

export const atomLines: ILine[] = [
    {
        depth: 0,
        appearOnStep: 12,
        elements: [
            {
                content: 'import ',
                token: 'orange'
            },
            {
                content: 'React ',
                token: 'white'
            },
            {
                content: 'from ',
                token: 'orange'
            },
            {
                content: '"react"',
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
        appearOnStep: 12,
        elements: [
            {
                content: 'import ',
                token: 'orange'
            },
            {
                content: '"./Atom.css"',
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
        appearOnStep: 12,
        elements: [
            {
                content: '',
                token: 'empty'
            }
        ]
    },
    {
        depth: 0,
        appearOnStep: 12,
        elements: [
            {
                content: 'export const ',
                token: 'orange'
            },
            {
                content: 'Atom ',
                token: 'yellow'
            },
            {
                content: '= () => {',
                token: 'white'
            }
        ]
    },
    {
        depth: 1,
        appearOnStep: 12,
        elements: [
            {
                content: 'return ',
                token: 'orange'
            },
            {
                content: '<></>',
                token: 'yellow'
            },
            {
                content: ';',
                token: 'orange'
            }
        ]
    },
    {
        depth: 0,
        appearOnStep: 12,
        elements: [closeCurlyBracket]
    }
]
