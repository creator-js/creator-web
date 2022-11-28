import React from 'react';
import './Atom.css';

export const Atom = () => {
    return <></>;
}


export default {
    name: 'services',
    templates: [
        {
            name: './services/api.js',
            template: '../_templates/service.js'
        }
    ]
}


export const x =() => {
    const serviceString = `export const ${answers.services.serviceName} = () => {
            return fetch(/${answers.services.serviceName});
        };`

    return {
        init: serviceString,
        updates: [
            {
                direction: "up",
                searchFor: ["includes", "};"],
                changeWith: `};\n\n${serviceString}`
            }
        ]
    }
}

export const getData = () => {
    return fetch("/getData");
}
