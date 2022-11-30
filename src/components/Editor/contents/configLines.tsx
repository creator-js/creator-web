import React from "react";
import {
    closeBracket,
    closeCurlyBracket,
    colon,
    comma, componentName,
    ILine, ILineElement,
    openBracket,
    openCurlyBracket
} from "@site/src/components/Editor/contents/commonLines";

const structure: ILine[] = [
    {
        depth: 3,
        appearOnStep: 4,
        elements: [
            {
                content: 'structure',
                token: 'purple'
            },
            ...colon,
            openCurlyBracket,

        ]
    },
    {
        depth: 4,
        appearOnStep: 4,
        elements: [
            {
                content: 'components',
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
        depth: 3,
        appearOnStep: 4,
        elements: [
            closeCurlyBracket,
            comma
        ]
    }
];

// ---------------------------------------------------------------------------------------------------------------------

const getQuestion = (name: string, message: string, step: number): ILine[] => {
    return [
        {
            depth: 5,
            appearOnStep: step,
            elements: [openCurlyBracket]
        },
        {
            depth: 6,
            appearOnStep: step,
            elements: [
                {
                    content: 'name',
                    token: 'purple'
                },
                ...colon,
                {
                    content: name,
                    token: 'green'
                },
                comma
            ]
        },
        {
            depth: 6,
            appearOnStep: step,
            elements: [
                {
                    content: 'message',
                    token: 'purple'
                },
                ...colon,
                {
                    content: message,
                    token: 'green'
                }

            ]
        },
        {
            depth: 5,
            appearOnStep: step,
            elements: [closeCurlyBracket, comma]
        },

    ]
}

const questions: ILine[] = [
    {
        depth: 3,
        appearOnStep: 5,
        elements: [
            {
                content: 'questions',
                token: 'purple'
            },
            ...colon,
            openBracket,

        ]
    },
    ...getQuestion('"componentName"', '"How to name the component?"', 5),
    ...getQuestion('"withService"', '"Associate this component with a service?"', 22),
    {
        depth: 3,
        appearOnStep: 5,
        elements: [
            closeBracket,
            comma
        ]
    }
];

// ---------------------------------------------------------------------------------------------------------------------

const getTemplate = (name: string, template: string, step: number): ILine[] => {
    return [
        {
            depth: 5,
            appearOnStep: step,
            elements: [openCurlyBracket]
        },
        {
            depth: 6,
            appearOnStep: step,
            elements: [
                {
                    content: 'name',
                    token: 'yellow'
                },
                ...colon,
                {
                    content: '(answers) => ',
                    token: 'white'
                },
                {
                    content: '`./',
                    token: 'green'
                },
                ...componentName,
                {
                    content: '/',
                    token: 'green'
                },
                ...componentName,
                {
                    content: '.' + name + '`',
                    token: 'green'
                },
                comma
            ]
        },
        {
            depth: 6,
            appearOnStep: step,
            elements: [
                {
                    content: 'template',
                    token: 'purple'
                },
                ...colon,
                {
                    content: template,
                    token: 'green'
                }

            ]
        },
        {
            depth: 5,
            appearOnStep: step,
            elements: [closeCurlyBracket, comma]
        }
    ]
}

type TemplateProps = { name: string, template: string, step: number };

const getTemplates = (templates: TemplateProps[]): ILine[] => {
    const t: ILine[] = templates.reduce((acc: ILine[], {name, template, step}: TemplateProps) => {
        acc = [...acc, ...getTemplate(name, template, step)]
        return acc;
    }, []);

    return [
        {
            depth: 3,
            appearOnStep: 6,
            elements: [
                {
                    content: 'templates',
                    token: 'purple'
                },
                ...colon,
                openBracket,
            ]
        },
        ...t,
        {
            depth: 3,
            appearOnStep: 6,
            elements: [
                closeBracket,
                comma
            ]
        }
    ]
}

const templates: ILine[] = getTemplates([
    { name: 'jsx', template: '"../_templates/components/component.js"', step: 6},
    { name: 'css', template: '"../_templates/components/style.js"', step: 6}
]);

// ---------------------------------------------------------------------------------------------------------------------

const next: ILine[] = [
    {
        depth: 3,
        appearOnStep: 23,
        elements: [
            {
                content: 'next',
                token: 'purple'
            },
            ...colon,
            openCurlyBracket,
        ]
    },
    {
        depth: 4,
        appearOnStep: 23,
        elements: [
            {
                content: 'name',
                token: 'purple'
            },
            ...colon,
            {
                content: '"services"',
                token: 'green'
            },
            comma
        ]
    },
    {
        depth: 4,
        appearOnStep: 23,
        elements: [
            {
                content: 'when',
                token: 'yellow'
            },
            ...colon,
            {
                content: '(answers) => !!answers.',
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
            }
        ]
    },
    {
        depth: 3,
        appearOnStep: 23,
        elements: [
            closeCurlyBracket,
            comma
        ]
    }
]

// ---------------------------------------------------------------------------------------------------------------------

const serviceQuestions: ILine[] = [
    {
        depth: 3,
        appearOnStep: 13,
        elements: [
            {
                content: 'questions',
                token: 'purple'
            },
            ...colon,
            openBracket,

        ]
    },
    ...getQuestion('"serviceName"', '"How to name the service?"', 13),
    {
        depth: 3,
        appearOnStep: 13,
        elements: [
            closeBracket,
            comma
        ]
    }
];

// ---------------------------------------------------------------------------------------------------------------------

const serviceTemplates: ILine[] = [
    {
        depth: 3,
        appearOnStep: 13,
        elements: [
            {
                content: 'templates',
                token: 'purple'
            },
            ...colon,
            openBracket,
        ]
    },
    {
        depth: 5,
        appearOnStep: 13,
        elements: [openCurlyBracket]
    },
    {
        depth: 6,
        appearOnStep: 13,
        elements: [
            {
                content: 'name',
                token: 'purple'
            },
            ...colon,
            {
                content: '"./services/service.js"',
                token: 'green'
            },
            comma
        ]
    },
    {
        depth: 6,
        appearOnStep: 13,
        elements: [
            {
                content: 'template',
                token: 'purple'
            },
            ...colon,
            {
                content: '"../_templates/services/service.js"',
                token: 'green'
            }

        ]
    },
    {
        depth: 5,
        appearOnStep: 13,
        elements: [closeCurlyBracket, comma]
    },
    {
        depth: 3,
        appearOnStep: 13,
        elements: [
            closeBracket,
            comma
        ]
    }
]

// ---------------------------------------------------------------------------------------------------------------------

export const configLines: ILine[] = [
    {
        depth: 0,
        appearOnStep: 0,
        elements: [
            {
                content: 'export default',
                token: 'orange',
            },
            {
                content: '',
                token: 'empty'
            },
            {
                content: <>&#123;</>,
                token: 'white'
            }
        ]
    },
    {
        depth: 1,
        appearOnStep: 2,
        elements: [
            {
                content: 'variables',
                token: 'purple'
            },
            ...colon,
            openCurlyBracket
        ]
    },
    {
        depth: 2,
        appearOnStep: 2,
        elements: [
            {
                content: 'root',
                token: 'purple'
            },
            ...colon,
            {
                content: '"./src"',
                token: 'green'
            }
        ]
    },
    {
        depth: 1,
        appearOnStep: 2,
        elements: [
            closeCurlyBracket,
            comma
        ]
    },
    {
        depth: 1,
        appearOnStep: 3,
        elements: [
            {
                content: 'domains',
                token: 'purple'
            },
            ...colon,
            openBracket
        ]
    },
    {
        depth: 2,
        appearOnStep: 3,
        elements: [
            openCurlyBracket
        ]
    },
    {
        depth: 3,
        appearOnStep: 3,
        elements: [
            {
                content: 'name',
                token: 'purple'
            },
            ...colon,
            {
                content: '"components"',
                token: 'green'
            },
            comma
        ]
    },
    ...structure,
    ...questions,
    ...templates,
    ...next,
    {
        depth: 2,
        appearOnStep: 3,
        elements: [
            closeCurlyBracket,
            comma
        ]
    },
    {
        depth: 2,
        appearOnStep: 13,
        elements: [
            openCurlyBracket
        ]
    },
    {
        depth: 3,
        appearOnStep: 13,
        elements: [
            {
                content: 'name',
                token: 'purple'
            },
            ...colon,
            {
                content: '"services"',
                token: 'green'
            },
            comma
        ]
    },
    ...serviceQuestions,
    ...serviceTemplates,
    {
        depth: 2,
        appearOnStep: 13,
        elements: [
            closeCurlyBracket,
            comma
        ]
    },
    {
        depth: 1,
        appearOnStep: 3,
        elements: [
            closeBracket
        ]
    },
    {
        depth: 0,
        appearOnStep: 0,
        elements: [
            closeCurlyBracket
        ]
    }
];
