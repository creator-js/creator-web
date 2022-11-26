---
sidebar_position: 4
---

# Templates

### Overview

Templates are `.js` files that define the contents of the files that we want to create or update.

> CreatorJS uses ES Modules. If your `package.json` does not include property `type` or its value is different from `module`, then templates should have `.mjs` extension.

The minimal configuration for a template file looks like this:
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

The configuration for the template in `creator.config.js` has these fields:

| Name        |                Type                 | Description                                                                                 | Required |
|-------------|:-----------------------------------:|:--------------------------------------------------------------------------------------------|----------|
| name        |               string                | The name of the file. You can use complex path to the file together with name.              | required |
| template    | ((answers) => string) &#124; string | The path to the template file.                                                              | required |
| when        |  [Operator, string] &#124; boolean  | The condition under which the file will be created or updated.                              | optional |
| createEmpty |               boolean               | The flag tells whether to create empty file. Overrides `variables.createEmpty` if provided. | optional |


### <a name="template-initialization"></a>Initialization

First, create a file `./templates/component.js` with this initial structure:
```js
// templates/components.js

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
Then update template in the config file:
```js
// creator.config.js

export default {
  domains: [
    {
      name: 'components',
      templates: [
        {
          name: (answers) => `${answers.components.componentName}.jsx`,
          template: './templates/component.js'
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
We substitute the answer to the `componentName` question from the `components` domain to the name of the file and also to the name of the component.

After running the CLI and answering questions, if the component was named "Atom" for example,  there will be a file `./Atom.jsx` with the contents:

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

Often we don't only want to create files, but also want to update already existing ones.

To make updates, there is a special array of objects describing in a declarative way how exactly to update the file. Each object represents an update.

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

It literally tells CreatorJS to search for the line that `includes` `div` and change it with `span`.

Running the CLI and answering the questions will modify existing `./Atom.js` file:
```js
import React from 'react';

export const Atom = () => {
  return <span/>;
};
```

Update object has the following structure:

| Name       |          Type                     | Description                                                                                                                                          | Required |
|------------|:---------------------------------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------|----------|
| direction  |        'up' &#124; 'down'         | Tells, which way to scan the file. Default is `down`.                                                                                                | optional |
| fromLine   |        [Operator, string]         | When `direction` is `down` the default value is the first line of the file. When `direction` is `up` the default value is the last line of the file. | optional |
| toLine     |        [Operator, string]         | When `direction` is `down` the default value is the last line of the file. When `direction` is `up` the default value is the first line of the file. | optional |
| searchFor  |        [Operator, string]         | Searches for a line with a `string` within bounds based on condition.                                                                                | required |
| changeWith |              string               | A value that should substitute `searchFor`.                                                                                                          | required |
| when       | [Operator, string] &#124; boolean | The condition under which the substitution is performed. The condition will be tested on every line within the bounds.                               | optional |
| fallback   |           update object           | When the update could not be performed, the `fallback` update will be performed if provided.                                                         | optional |

* Operator = `'includes' | 'not includes' | '===' | '!=='`

`direction`, `fromLine` and `toLine` together define the bounds within which the look-up will be performed.
