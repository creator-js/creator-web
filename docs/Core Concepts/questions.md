---
sidebar_position: 2
---

# Questions

Questions can be added to provide more details about how to create files. CreatorJS uses [inquirer.js](https://github.com/SBoudrias/Inquirer.js#readme) to work with questions.
If you already familiar with [API](https://github.com/SBoudrias/Inquirer.js#questions), that's great. Let's add a simple question to our `components` domain from the minimal config:
```js
export default {
    variables: {
        root: './src'
    },
    domains: [
        {
            name: 'components',
            templates: [
                {
                    name: 'component.jsx'
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
After running the CLI and answering questions, the `answers` object will be created.

`answers` can be used to:
- conditionally show questions
- conditionally create or update files
- set files names
- populate templates

For example, let's add a dynamic file name to our config:
```js
export default {
  variables: {
    root: './src'
  },
  domains: [
    {
      name: 'components',
      templates: [
        {
          name: (answers) => `${answers.components.componentName}.jsx`
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

After running the CLI and answering questions, the file will be created with a name that you provided when answered a question `How to name the component?`.

`answers` has the following structure:
```js
{
    variables: {
        // variables from creator.config.js variables field
    },
    domain1: {
        // answers for domain 1 questions
    },
    domain2: {
        // answers for domain 2 questions
    },
    // ...
}
```

The structure of answers above is valid everywhere except for `questions`. Inquirers' question is similar, but not the same.

In questions, `answers` structure would represent answers for the particular domain.
For example, it will have system fields, like `_file_1` or `_new-folder_1`, which are used for dynamic structure.
In the resulting `answers` these fields are changed with `filePath`.
