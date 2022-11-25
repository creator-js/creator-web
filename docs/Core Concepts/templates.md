---
sidebar_position: 3
---

# Templates

Templates are `.js` files that define the contents of the files that we want to create or update.

> CreatorJS uses ES Modules. If your `package.json` does not include property `type` or its value is different from `module`, then templates should have `.mjs` extension.

Create a file `./templates/component.js` with this minimal configuration:
```js
export default (answers) => {
  return {
    init: '',
    updates: []
  };
};
```

`init` is a string with the initial content of the file.

`updates` is an array of special objects that define the updates.

### <a name="template-initialization"></a>Initialization

Let's add some initial structure of the file:
```js
export default (answers) => {
  return {
    init: `import React from 'react';
    
    export const ${answers.components.componentName} = () => {
      return <div/>
    }
    `,
    updates: []
  };
};
```
For the components' name, the answer to the "componentName" question from "components" domain is substituted.

And also update template in the config file:
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
          name: (answers) => `${answers.components.componentName}.jsx`,
          template: '../templates/component.js'
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
> Template path is relative to what is defined in the `root` variable.

After running the CLI and answering questions, if the component was named "Atom" for example,  there will be a file `./src/Atom.jsx` with the contents:

```jsx
import React from 'react';

export const Atom = () => {
  return <div/>;
};
```

In the`creator.config.js` file the `name` field of a template is not just a name of the file, but the path to this file.
It is possible to extend path with folder, and they will be created:
```js
name: (answers) => `./need/more/folders/${answers.components.componentName}.jsx`
```
It is also possible to go up the folder structure:
```js
name: (answers) => `../../../${answers.components.componentName}.jsx`
```
Thus, it is not limited to just file name.

### <a name="template-update"></a>Update

To make updates, there is an array of objects that will require a developer to define in a declarative way how exactly to update the file. Each object represents an update.

The minimal configuration for this object looks like this:
```js
// ./templates/component.js
export default (answers) => {
    return {
        init: `import React from 'react'
    
    export const ${answers.components.componentName} = () => {
      return <div/>
    }
    `,
        updates: [
            // These are two required fields to perform an unpdate
            {
                searchFor: ['includes', 'div'],
                changeWith: 'span'
            }
        ]
    };
};
```

It literally tells CreatorJS to search for the line that `includes` string `div` and change it with `span`.

Running the CLI and answering the questions will modify existing `./src/Atom.js` file:
```js
import React from 'react';

export const Atom = () => {
  return <span/>;
};
```

All fields of update object:

| Name       |             Type              | Required | Description                                                                                                                                          |
|------------|:-----------------------------:|----------|:-----------------------------------------------------------------------------------------------------------------------------------------------------|
| direction  |        'up' &#124; 'down'         | false    | Tells, which way to scan the file. Default is `down`.                                                                                                |
| fromLine   |      [Operator, string]       | false    | When `direction` is `down` the default value is the first line of the file. When `direction` is `up` the default value is the last line of the file. |
| toLine     |      [Operator, string]       | false    | When `direction` is `down` the default value is the last line of the file. When `direction` is `up` the default value is the first line of the file. |
| searchFor  |      [Operator, string]       | true     | Searches for a line with a `string` within boundaries based on condition.                                                                            |
| changeWith |            string             | true     | A string template that should change the `string` from `searchFor`.                                                                                  |
| when       | [Operator, string] &#124; boolean | false    | A condition on which the substitution is performed. The condition will be checked against every line within the boundaries.                          |
| fallback   |         update object         | false    | When the update could not be performed, the `fallback` update will be performed if provided.                                                         |

* Operator = `'includes' | 'not includes' | '===' | '!=='`
