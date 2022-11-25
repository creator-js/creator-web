---
sidebar_position: 1
---

# Domains

`domains` are scopes, within which `questions`, `templates` and `structure` are defined.

The `name` field represents the name of the domain. When started, the CLI will first ask `What needs to be created?` question and in the list of choices there will be domain names.

### Domains chaining

Sometimes you want to create files from one domain and proceed with another.
One of examples can be Redux, when you want to create a page and then associate it with the reducer.

To chain domains, use `next` field:
```js
export default {
  variables: {
    root: './src'
  },
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

All fields of the `next` object:

| Name          |                 Type                  | Required | Description                                                            |
|---------------|:-------------------------------------:|----------|:-----------------------------------------------------------------------|
| name          |                string                 | true     | The name of the next domain.                                           |
| when          | ((answers) => boolean) &#124; boolean | false    | Condition for switching to the next domain.                            |
| skipStructure |                boolean                | false    | Flag to skip structure and use `filePath` from the previous domain.    |


Sometimes we want to include domains in chaining, but exclude them from initial questions.   
For that case, there is a field `hidden: boolean`:

```js
{
      name: 'hiddenDomain',
      hidden: true,
      questions: [
        // ...
      ]
    }
```
