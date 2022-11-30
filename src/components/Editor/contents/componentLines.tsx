import {
    closeCurlyBracket,
    colon,
    componentName,
    ILine,
    openCurlyBracket
} from "@site/src/components/Editor/contents/commonLines";

const componentWithService: ILine[] = [
    {
        depth: 1,
        appearOnStep: 24,
        elements: [
            {
                content: 'const ',
                token: 'orange'
            },
            {
                content: 'hasService = answers.',
                token: 'white'
            },
            {
                content: 'components',
                token: 'purple'
            },
            {
                content: '.',
                token: 'white'
            },
            {
                content: 'withService',
                token: 'purple'
            },
            {
                content: ';',
                token: 'orange'
            },
        ]
    },
    {
        depth: 1,
        appearOnStep: 24,
        elements: [
            {
                content: 'const ',
                token: 'orange'
            },
            {
                content: 'serviceName = hasService ? answers.',
                token: 'white'
            },
            {
                content: 'services',
                token: 'purple'
            },
            {
                content: '.',
                token: 'white'
            },
            {
                content: 'serviceName',
                token: 'purple'
            },
            {
                content: ' : ',
                token: 'white'
            },
            {
                content: '""',
                token: 'green'
            },
            {
                content: ';',
                token: 'orange'
            },
        ]
    },
    {
        depth: 1,
        appearOnStep: 24,
        elements: [
            {
                content: '',
                token: 'empty'
            },
        ]
    },
    {
        depth: 1,
        appearOnStep: 24,
        elements: [
            {
                content: 'const ',
                token: 'orange'
            },
            {
                content: 'useEffectImport = hasService ? ',
                token: 'white'
            },
            {
                content: '", { useEffect }"',
                token: 'green'
            },
            {
                content: ' : ',
                token: 'white'
            },
            {
                content: '""',
                token: 'green'
            },
            {
                content: ';',
                token: 'orange'
            },
        ]
    },
    {
        depth: 1,
        appearOnStep: 24,
        elements: [
            {
                content: 'const ',
                token: 'orange'
            },
            {
                content: 'useEffectString = hasService ? ',
                token: 'white'
            },
            {
                content: '`useEffect(() => {',
                token: 'green'
            }
        ]
    },
    {
        depth: 2,
        appearOnStep: 24,
        elements: [
            {
                content: '${serviceName}',
                token: 'white'
            },
            {
                content: '();',
                token: 'green'
            }
        ]
    },
    {
        depth: 1,
        appearOnStep: 24,
        elements: [
            {
                content: '}, []);',
                token: 'green'
            }
        ]
    },
    {
        depth: 1,
        appearOnStep: 24,
        elements: [
            {
                content: '`',
                token: 'green'
            },
            {
                content: ' : ',
                token: 'white'
            },
            {
                content: '""',
                token: 'green'
            },
            {
                content: ';',
                token: 'orange'
            }
        ]
    },
    {
        depth: 1,
        appearOnStep: 24,
        elements: [
            {
                content: '',
                token: 'empty'
            }
        ]
    },
    {
        depth: 1,
        appearOnStep: 24,
        elements: [
            {
                content: 'const ',
                token: 'orange'
            },
            {
                content: 'serviceImport = hasService ?',
                token: 'white'
            }
        ]
    },
    {
        depth: 2,
        appearOnStep: 24,
        elements: [
            {
                content: '`import { ',
                token: 'green'
            },
            {
                content: '${serviceName}',
                token: 'white'
            },
            {
                content: ' } from "../../services/service";`',
                token: 'green'
            },
            {
                content: ' : ',
                token: 'white'
            },
            {
                content: '""',
                token: 'green'
            },
            {
                content: ';',
                token: 'orange'
            }
        ]
    },
    {
        depth: 1,
        appearOnStep: 24,
        elements: [
            {
                content: '',
                token: 'empty'
            }
        ]
    }
]

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
    ...componentWithService,
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
        hideOnStep: 24,
        elements: [
            {
                content: 'init',
                token: 'purple'
            },
            ...colon,
            {
                content: '`import React from "react";',
                token: 'green'
            }
        ]
    },
    {
        depth: 2,
        appearOnStep: 24,
        elements: [
            {
                content: 'init',
                token: 'purple'
            },
            ...colon,
            {
                content: '`import React',
                token: 'green'
            },
            {
                content: '${useEffectImport}',
                token: 'white'
            },
            {
                content: ' from "react";',
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
        appearOnStep: 24,
        elements: [
            {
                content: '${serviceImport}',
                token: 'white'
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
        appearOnStep: 24,
        elements: [
            {
                content: '${useEffectString}',
                token: 'white'
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
