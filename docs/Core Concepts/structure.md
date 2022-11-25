---
sidebar_position: 4
---

# Structure

Structure comes in handy when there is a defined folder structure in the project.
Structure is an object that represents this folder structure.

### <a name="static-structure"></a>Static structure

Let's say we have this folder structure:
```text
components
----shared
----features
----pages
```

In terms of CreatorJS `structure` would look like this:
```js
export default {
    variables: {
        root: './src'
    },
    domains: [
        {
            name: 'components',
            structure: {
                components: {
                    shared: '',
                    features: '',
                    pages: ''
                }
            },
            templates: [
                {
                    name: (answers) => `${answers.components.componentName}.jsx`,
                    template: '../templates/component.template.js'
                }
            ],
            questions: [
                {
                    name: 'componentName',
                    message: 'How to name the component?',
                    type: 'input'
                }
            ]
        },
    ]
};
```

With `structure` provided, before asking questions from `questions` the CLI will walk you through the structure.
`structure` impacts the path where files will be created. For example, if you select `components -> shared`, then the file `Atom.jsx`
will have path `./src/components/shared/Atom.jsx`.

When the value of the field is a string, the `structure` questions terminate, and `questions` questions begin.

### <a name="dynamic-structure"></a>Dynamic structure

There are cases when we want to dynamically create folders. To make the folder dynamic, use `$` prefix.
For example, let's say we want to create features on the run. Add an object to the `features` with a `$feature` field equal to an empty string.

```js
export default {
    variables: {
        root: './src'
    },
    domains: [
        {
            name: 'components',
            structure: {
                components: {
                    shared: '',
                    features: {
                        $feature: ''
                    },
                    pages: ''
                }
            },
            templates: [
                {
                    name: (answers) => `${answers.components.componentName}.jsx`,
                    template: '../templates/component.template.js'
                }
            ],
            questions: [
                {
                    name: 'componentName',
                    message: 'How to name the component?',
                    type: 'input'
                }
            ]
        },
    ]
};
```

Now when you get to the `features` folder, CreatorJS will ask you to create a new folder or select an existing ones.

> The name after `$` does not impact anything.
