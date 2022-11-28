---
sidebar_position: 2
---

# Types support 

To support config types, use JSDoc `@type` notation:

```js
/** @type { import('creator-js-cli/dist/index').CreatorConfig } */
const config = {
  // ...
}

export default config;
```
