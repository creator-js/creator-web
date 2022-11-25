---
sidebar_position: 3
---

# Configuration

Create `creator.config.js` file in the root of your project.
> CreatorJS uses ES Modules. If your `package.json` does not include property `type` or its value is different from `module`, then you should create `creator.config.mjs` file instead.

The minimal configuration looks like this:

```js
export default {
  variables: {
    root: './src'
  },
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


`variables` is a dictionary of any variables that one might want to use in the templates.
>`root` is the only required variable.

Run the CLI with this simple command:
```shell
g
```
or in case of errors:
```shell
./node_modules/.bin/g
```

After running the CLI and answering initial question with `components` option, file `./src/component.jsx` should be created.
