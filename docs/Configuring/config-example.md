---
sidebar_position: 1
---

# Configuration example

```js
// creator.config.js

export default {
    variables: {
        root: './src'
    },
    domains: [
        {
            // The name will be in the list of choices for the initial question when starting CreatorJS
            name: 'components',
            
            // Uncomment this line if you want to hide this domain from the initial question
            // hidden: true,
            
            // Structure replicates the part of the folder structure, where you want to create files
            structure: {
                components: {
                    shared: '',
                    features: {
                        // Add $ prefix to make folders on the run
                        $feature: ''
                    },
                    pages: ''
                }
            },
            
            // CreatorJS will ask you these questions
            questions: [
                {
                    // The answer will be saved to "componentName" field.
                    // It can be accessed by referring to "answers.components.componentName"
                    name: 'componentName',
                    message: 'How to name the component?',
                },
                {
                    name: 'useService',
                    message: 'Associate fetch request with this component?',
                    type: 'confirm',
                    // Only in questions "answers" don't have access to all answers.
                    // Instead, they contain only answers specific to this particular domain questions.
                    when: (answers) => Object.values(answers).some((a) => a === 'pages')
                }
            ],
            
            // File templates ingest "answers" and apply desired content
            templates: [
                {
                    // These "answers" already have an access to all answers.
                    // "name" can be also a path to the file. 
                    name: (answers) => `./can/use/path/${answers.components.componentName}.jsx`,
                    // The path to the template file. The path is relative to "variables.root"
                    template: '../templates/component.js'
                }
            ],
            
            // If you want to chain domains, uncomment these lines
            next: {
                // The name of the next domain
                name: '',
                
                // Uncomment this line to use condition
                // when: (answers) => true,
                
                // If you want to reuse structure from previous domain, uncomment this line
                // skipStructure: true
            }
        }
    ]
};
```
