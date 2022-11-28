import React, {ReactNode} from "react";
import {ILine} from "@site/src/components/Editor/contents/common";
import {configLines} from "@site/src/components/Editor/contents/config";
import {componentLines} from "@site/src/components/Editor/contents/component";
import {styleLines} from "@site/src/components/Editor/contents/style";
import {atomLines} from "@site/src/components/Editor/contents/atom";
import {serviceLines} from "@site/src/components/Editor/contents/service.";
import {apiLines} from "@site/src/components/Editor/contents/api.js";

export interface IStep {
    text: ReactNode;
    lines: ILine[];
    file: string;
    scroll: number;
    command?: string;
    question?: string;
    answer?: string;
}

export const steps: IStep[] = [
    {
        text: <>Begin by creating empty "creator.config.js" file</>,
        lines: configLines,
        file: 'creator.config.js',
        scroll: 0,
        command: 'npm install creator-js-cli --save-dev'
    },
    {
        text: <> We want our files to be placed in "src" folder. Add this variable.root</>,
        lines: configLines,
        file: 'creator.config.js',
        scroll: 0
    },
    {
        text: <> Domain should have name </>,
        lines: configLines,
        file: 'creator.config.js',
        scroll: 0
    },
    {
        text: <> Domain should have structure </>,
        lines: configLines,
        file: 'creator.config.js',
        scroll: 0
    },
    {
        text: <> Domain should have questions </>,
        lines: configLines,
        file: 'creator.config.js',
        scroll: 0
    },
    {
        text: <> Domain should have templates </>,
        lines: configLines,
        file: 'creator.config.js',
        scroll: -230
    },
    {
        text: <> Create template component file </>,
        lines: componentLines,
        file: 'component.js',
        scroll: 0
    },
    {
        text: <> Create template styles file </>,
        lines: styleLines,
        file: 'style.js',
        scroll: 0
    },
    {
        text: <> Ready to start yarn G </>,
        lines: configLines,
        file: 'creator.config.js',
        scroll: 0,
        command: 'g',
        question: 'What do you want to create?',
        answer: 'components'
    },
    {
        text: <> Q2 </>,
        lines: configLines,
        file: 'creator.config.js',
        scroll: 0,
        question: 'Where to create a file?',
        answer: 'components'
    },
    {
        text: <> Q3 </>,
        lines: configLines,
        file: 'creator.config.js',
        scroll: 0,
        question: 'How to name the component?',
        answer: 'Atom'
    },
    {
        text: <> Show Atom.tsx component  </>,
        lines: atomLines,
        file: 'Atom.jsx',
        scroll: 0
    },
    {
        text: <> Add service domain  </>,
        lines: configLines,
        file: 'creator.config.js',
        scroll: -600
    },
    {
        text: <> Add service template file </>,
        lines: serviceLines,
        file: 'service.js',
        scroll: 0
    },
    {
        text: <> Add service template file - updates </>,
        lines: serviceLines,
        file: 'service.js',
        scroll: 0
    },
    {
        text: <> [1] Create service Q1 </>,
        lines: serviceLines,
        file: 'service.js',
        scroll: 0,
        command: 'g',
        question: 'What do you want to create?',
        answer: 'services'
    },
    {
        text: <> [1] Create service Q2 </>,
        lines: serviceLines,
        file: 'service.js',
        scroll: 0,
        question: 'How to name the service?',
        answer: 'getData'
    },
    {
        text: <> getData created </>,
        lines: apiLines,
        file: 'api.js',
        scroll: 0,
    },
    {
        text: <> [2] Create service Q1 </>,
        lines: apiLines,
        file: 'api.js',
        scroll: 0,
        command: 'g',
        question: 'What do you want to create?',
        answer: 'services'
    },
    {
        text: <> [2] Create service Q2 </>,
        lines: apiLines,
        file: 'api.js',
        scroll: 0,
        question: 'How to name the service?',
        answer: 'getAnotherData'
    },
    {
        text: <> getAnotherData created, api updated </>,
        lines: apiLines,
        file: 'api.js',
        scroll: 0,
    }
]
