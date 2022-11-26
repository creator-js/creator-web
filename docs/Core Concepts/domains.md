---
sidebar_position: 2
---

# Domains

### Overview

`domains` are scopes, within which `questions`, `templates` and `structure` are defined.

Each domain has the following fields:

| Name        | Description                                                                                                                                              | Required |
|:------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------|----------|
| name        | The name of the domain. When started, the CLI will first ask `What needs to be created?` question and in the list of choices there will be domain names. | required |
| questions   | Questions that will be asked in the scope of the domain.                                                                                                 | optional |
| templates   | Files that will be created after answering domains questions.                                                                                            | optional |
| structure   | The folder structure of the part of your application, within which you want to create new files. It does not require full structure replication.         | optional |
| next        | The next domain to be processed after you finish answering questions for the current domain.                                                             | optional |
| hidden      | The flag to hide domain from the initial question.                                                                                                       | optional |




### Domains chaining

Sometimes you want to create files from one domain and proceed with another.
One of examples can be Redux, when you want to create a page and then associate it with the reducer.

To chain domains, use `next` field:
```js
export default {
  domains: [
    {
      name: 'components',
      templates: [
        // ...
      ],
      questions: [
        // ...
      ],
      next: {
        name: 'redux'
      }
    },
    {
      name: 'redux',
      templates: [
        // ...
      ],
      questions: [
        // ...
      ]
    }
  ]
};
```

The `next` object has the following fields:

| Name          |                 Type                  | Description                                                            | Required |
|---------------|:-------------------------------------:|:-----------------------------------------------------------------------|----------|
| name          |                string                 | The name of the next domain.                                           | required |
| when          | ((answers) => boolean) &#124; boolean | Condition for switching to the next domain.                            | optional |
| skipStructure |                boolean                | Flag to skip structure and use `filePath` from the previous domain.    | optional |


Sometimes you want to include domains in chaining, but exclude them from initial questions.   
For that case, you can hide the domain from the initial question with `hidden` flag:

```js
{
      name: 'hiddenDomain',
      hidden: true,
      questions: [
        // ...
      ]
    }
```
