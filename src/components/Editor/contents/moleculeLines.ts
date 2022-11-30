import {closeCurlyBracket, comma, ILine} from "@site/src/components/Editor/contents/commonLines";

export const moleculeLines: ILine[] = [
    {
        depth: 0,
        appearOnStep: 31,
        elements: [
            {
                content: 'import ',
                token: 'orange'
            },
            {
                content: 'React',
                token: 'white'
            },
            comma,
            {
                content: ' { ',
                token: 'white'
            },
            {
                content: ' useEffect ',
                token: 'yellow'
            },
            {
                content: ' } ',
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
        appearOnStep: 31,
        elements: [
            {
                content: 'import ',
                token: 'orange'
            },
            {
                content: '"./Molecule.css"',
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
        appearOnStep: 31,
        elements: [
            {
                content: '',
                token: 'empty'
            }
        ]
    },
    {
        depth: 0,
        appearOnStep: 31,
        elements: [
            {
                content: 'import',
                token: 'orange'
            },
            {
                content: ' { getMolecules } ',
                token: 'white'
            },
            {
                content: 'from ',
                token: 'orange'
            },
            {
                content: '"../../services/service"',
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
        appearOnStep: 31,
        elements: [
            {
                content: '',
                token: 'empty'
            }
        ]
    },
    {
        depth: 0,
        appearOnStep: 31,
        elements: [
            {
                content: 'export const ',
                token: 'orange'
            },
            {
                content: 'Molecule ',
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
        appearOnStep: 31,
        elements: [
            {
                content: 'useEffect',
                token: 'yellow'
            },
            {
                content: '(() => {',
                token: 'white'
            }
        ]
    },
    {
        depth: 2,
        appearOnStep: 31,
        elements: [
            {
                content: 'getMolecules()',
                token: 'white'
            },
            {
                content: ';',
                token: 'orange'
            }
        ]
    },
    {
        depth: 1,
        appearOnStep: 31,
        elements: [
            {
                content: '}',
                token: 'white'
            },
            {
                content: ',',
                token: 'orange'
            },
            {
                content: '',
                token: 'empty'
            },
            {
                content: '[])',
                token: 'white'
            },
            {
                content: ';',
                token: 'orange'
            }
        ]
    },
    {
        depth: 1,
        appearOnStep: 31,
        elements: [
            {
                content: '',
                token: 'empty'
            }
        ]
    },
    {
        depth: 1,
        appearOnStep: 31,
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
        appearOnStep: 31,
        elements: [closeCurlyBracket]
    }
]
