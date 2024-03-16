---
sidebar_position: 3
---

# Configuring CreatorJS

Create `creator.config.js` file in the root of your project.
> CreatorJS uses ES Modules. If your `package.json` does not include property `type` or its value is different from `module`, then you should create `creator.config.mjs` file instead.

The minimal configuration looks like this:

```js
export default {
  domains: [
    {
      name: 'components',
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

