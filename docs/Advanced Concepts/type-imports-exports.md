---
sidebar_position: 1
---

# Type import and export

When working with typescript, you might want to create new interfaces or types and import them into files.
However, there are primitives in JavaScript, which names are reserved. We don't want to end up importing a string or a number.
Also, when creating an array type, we don't want to have brackets `[]` in the interfaces/type or import statement.

CreatorJS solves this task under the hood for you so you don't need to think about complicated conditions in the templates.

For example, if you have in your template:
```ts
export default (answers) => {
    return {
        init: `export interface ${answers.someDomain.type} {}`
    };
};
```
you can answer the `type` question with something like `number[]` and this template will not be created.
Or if you answer with `ISomething[]`, it will resolve to:
```ts
export interface ISomething {}
```

CreatorJS ignores primitives and array brackets for `export interfaces`, `export type` and `import` statements.
