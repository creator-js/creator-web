---
sidebar_position: 5
---

# Structure

### Overview

Structure comes in handy when there is a defined folder structure in the project.
Structure is an object that represents this folder structure. Within the domain it is not required to provide the full folder structure.
See [Working with different structures](#working-with-different-structures) for more details.

`structure` adds structural questions prior to the user-defined `questions`.

Answers to **structural questions** are not stored in the final `answers`. Instead, they are merged into a field called `filePath`, which you may find under domains' answers.

However, you may see explicit answers to **structural questions** in `questions` `answers`. 

For example, let's say we have this question with condition:
```js
// creator.config.js

export default {
    domains: [
        {
            name: 'components',
            structure: {
                components: ''
            },
            questions: [
                {
                    name: 'componentName',
                    message: 'How to name the component?',
                    type: 'input',
                    when: (answers) => // some condition
                }
            ]
        },
    ]
};
```

This `answers` will look like this:
```js
{
  create: 'components',
  _file_1: 'components'
}
```

In questions, `answers` structure would represent answers for the **particular domain**.
It does not have access to other domains or variables. For example, it will have system fields, like `_file_1` or `_new-folder_1`, which are used for dynamic structure.

One more thing to be explicitly mentioned, is that `filePath` is a combination of:

`<variables.root>`/`<structural answers>`/`<template name>`.

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
// creator.config.js

export default {
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
                    template: './templates/component.template.js'
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
will have path `./components/shared/Atom.jsx`.

When the value of the field is a string, the `structure` questions terminate, and the user-defined `questions` questions begin.

### <a name="dynamic-structure"></a>Dynamic structure

There are cases when we want to dynamically create folders. To make the folder dynamic, use `$` prefix.

Let's say we want to create features on the run. Add an object to the `features` with a `$feature` field equal to an empty string.

```js
// creator.config.js

export default {
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
                    template: './templates/component.template.js'
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

Now when you get to the `features` folder, CreatorJS will ask you to create a new folder or select an existing one.

The name after `$` does not impact anything.

### Structural questions for domain chaining

In the [domains chaining](/docs/Core%20Concepts/domains#domains-chaining) section, we learned that it is possible to merge domains into a single questions flow.

If domains, that we want to merge, contain `structure`, each question set will start with structural questions.

It is possible to pass structural questions answers to the next domain by using `next.skipStructure` flag:

```js
// creator.config.js

export default {
    domains: [
        {
            name: 'components',
            // ...
            next: {
                name: 'redux',
                skipStructure: true
            }
        },
        {
            name: 'redux',
            // ...
        }
    ]
};

```


## <a name="working-with-different-structures"></a>Working with different structures

Different domains can have different structures. 

Consider this folder structure:
```text
components
----shared
----features
--------feature-1
--------feature-2
----pages

redux
----reducer-1
----reducer-2
```

It can be represented like this:
```js
// creator.config.js

export default {
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
            // ...
        },
        {
            name: 'components',
            structure: {
                redux: {
                    $reducer: ''
                },
                // ...
            }
        }
    ]
};

```

It is not required to replicate the full folder structure. Create one that is suitable for the particular domain.
