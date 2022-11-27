---
sidebar_position: 3
---

# Configuration

### Overview

Create `creator.config.js` file in the root of your project.
> CreatorJS uses ES Modules. If your `package.json` does not include property `type` or its value is different from `module`, then you should create `creator.config.mjs` file instead.

The minimal configuration looks like this:

```js
export default {
  domains: [
    {
      name: 'components',
      // Templates are optional, but it does not make sense for this example
      templates: [
          {
              name: 'component.jsx'
          }
      ]
    }
  ]
};
```

Run the CLI with this simple command:
```shell
g
```
or in case of errors:
```shell
./node_modules/.bin/g
```

After running the CLI and answering initial question with `components` option, file `./component.jsx` should be created.

### Types support 

To support config types, use JSDoc `@type` notation:

```js
/** @type { import('creator-js-cli/dist/index').CreatorConfig } */
const config = {
  // ...
}

export default config;
```

### Config example

```js
// creator.config.js

/** @type { import('creator-js-cli/dist/index').CreatorConfig } */
const config = {
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
      questions: [
        {
          name: 'componentName',
          message: 'How to name the component?',
          type: 'input'
        }
      ],
      templates: [
        {
          name: (answers) => `${answers.components.componentName}.jsx`,
          template: './templates/component.template.js'
        }
      ],
      next: {
        name: 'redux',
        skipStructure: true
      }
    },
    {
      name: 'redux',
      questions: [
        {
          name: 'reducerName',
          message: 'How to name the reducer?',
          type: 'input'
        }
      ],
      templates: [
        {
          name: (answers) => `${answers.redux.componentName}.jsx`,
          template: './templates/redux.template.js'
        }
      ],
    }
  ]
};

export default config;
```
