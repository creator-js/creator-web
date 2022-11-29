import React, {ReactNode} from "react";
import {ColorToken} from "@site/src/components/Editor/Token/Token";

export interface ILine {
    depth: number;
    elements: ILineElement[],
    appearOnStep: number;
    hideOnStep?: number;
}

export interface ILineElement {
    content: ReactNode;
    token: ColorToken;
}

export const colon: ILineElement[] = [
    {
        content: ':',
        token: 'white'
    },
    {
        content: '',
        token: 'empty'
    }
]

export const openCurlyBracket: ILineElement = {
    content: <>&#123;</>,
    token: 'white'
};

export const closeCurlyBracket: ILineElement = {
    content: <>&#125;</>,
    token: 'white'
}

export const openBracket: ILineElement = {
    content: '[',
    token: 'white'
}

export const closeBracket: ILineElement = {
    content: ']',
    token: 'white'
}

export const comma: ILineElement = {
    content: ',',
    token: 'orange'
}

export const componentName: ILineElement[] = [
    {
        content: '${answers.',
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
        content: 'componentName',
        token: 'purple'
    },
    {
        content: '}',
        token: 'white'
    }
];

export const serviceName: ILineElement[] = [
    {
        content: '${answers.',
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
        content: '}',
        token: 'white'
    }
];
