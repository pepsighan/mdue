# mdue

![npm version](https://badgen.net/npm/v/mdue) ![types](https://badgen.net/npm/types/mdue) ![license](https://badgen.net/npm/license/mdue)

Material Design Icons for Vue 3.

## Features

- SVG based icons.
- Supports Vue 3.
- Treeshaking supported.
- Supports typescript.

## Installation

```sh
$ npm install mdue --save
# or
$ yarn add mdue
```

## Example

Using the icons from `mdue` is very easy. Just import the icons into your app and use them. Only the icons that you use will be bundled with the app.

```html
<template>
  <ab-testing></ab-testing>
</template>

<script>
  import { AbTesting } from 'mdue';

  export default {
    name: 'App',
    components: {
      AbTesting,
    },
  };
</script>
```

A more full-fledged example in the [examples](../example) directory. You may clone the repo and try the icons out.
