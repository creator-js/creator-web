import React from "react";
import {
    closeBracket,
    closeCurlyBracket,
    colon,
    comma, componentName,
    ILine, ILineElement,
    openBracket,
    openCurlyBracket
} from "@site/src/components/Editor/contents/common";

const structure: ILine[] = [
    {
        depth: 3,
        appearOnStep: 3,
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
        appearOnStep: 3,
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
        appearOnStep: 3,
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
            elements: [closeCurlyBracket]
        }
    ]
}

const questions: ILine[] = [
    {
        depth: 3,
        appearOnStep: 4,
        elements: [
            {
                content: 'questions',
                token: 'purple'
            },
            ...colon,
            openBracket,

        ]
    },
    ...getQuestion('"componentName"', '"How to name the component?"', 4),
    ...getQuestion('"withService"', '"Associate this component with a service?"', 21),
    {
        depth: 3,
        appearOnStep: 4,
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
            appearOnStep: 5,
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
            appearOnStep: 5,
            elements: [
                closeBracket,
                comma
            ]
        }
    ]
}

const templates: ILine[] = getTemplates([
    { name: 'tsx', template: '"../_templates/components/component.js"', step: 5},
    { name: 'css', template: '"../_templates/components/style.js"', step: 5}
]);

// ---------------------------------------------------------------------------------------------------------------------

const next: ILine[] = [
    {
        depth: 3,
        appearOnStep: 22,
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
        appearOnStep: 22,
        elements: [
            {
                content: 'services',
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
        appearOnStep: 22,
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
        appearOnStep: 22,
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
        appearOnStep: 12,
        elements: [
            {
                content: 'questions',
                token: 'purple'
            },
            ...colon,
            openBracket,

        ]
    },
    ...getQuestion('"serviceName"', '"How to name the service?"', 12),
    {
        depth: 3,
        appearOnStep: 12,
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
        appearOnStep: 12,
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
        appearOnStep: 12,
        elements: [openCurlyBracket]
    },
    {
        depth: 6,
        appearOnStep: 12,
        elements: [
            {
                content: 'name',
                token: 'purple'
            },
            ...colon,
            {
                content: '"./services/api.js"',
                token: 'green'
            }
        ]
    },
    {
        depth: 6,
        appearOnStep: 12,
        elements: [
            {
                content: 'template',
                token: 'purple'
            },
            ...colon,
            {
                content: '"./_templates/services/service.js"',
                token: 'green'
            }

        ]
    },
    {
        depth: 5,
        appearOnStep: 12,
        elements: [closeCurlyBracket, comma]
    },
    {
        depth: 3,
        appearOnStep: 12,
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
        appearOnStep: 1,
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
        appearOnStep: 1,
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
        appearOnStep: 1,
        elements: [
            closeCurlyBracket,
            comma
        ]
    },
    {
        depth: 1,
        appearOnStep: 2,
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
        appearOnStep: 2,
        elements: [
            openCurlyBracket
        ]
    },
    {
        depth: 3,
        appearOnStep: 2,
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
        appearOnStep: 2,
        elements: [
            closeCurlyBracket,
            comma
        ]
    },
    {
        depth: 2,
        appearOnStep: 12,
        elements: [
            openCurlyBracket
        ]
    },
    {
        depth: 3,
        appearOnStep: 12,
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
        appearOnStep: 12,
        elements: [
            closeCurlyBracket,
            comma
        ]
    },
    {
        depth: 1,
        appearOnStep: 2,
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
