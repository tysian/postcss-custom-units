# PostCSS Custom Units Plugin

PostCSS plugin for handling multiple custom units.

## Install

Install plugin as dev dependency

```sh
npm install @tysian/postcss-custom-units --save-dev
```

Use your plugin in your postcss config.

```js
import postcss from 'postcss';
import postcssCustomUnits from '@tysian/postcss-custom-units';

const pluginOptions = {
  units: [
    {
      base: '0.0625rem',
      unit: 'rpx',
    },
  ],
};

postcss([postcssCustomUnits(pluginOptions)]).process(
  YOUR_CSS /*, processOptions */,
);
```

## Configuration

The custom units are defined inside your plugin config. You **CAN'T** define or update them using css variables.
In plugin options, pass `units` as array, with custom units.
Custom unit has two properties:

- base - your **X** unit will be transformed into `X * base` <br />**Example**: if `base` = `4px`, then `5unit` = `20px`
- unit - the _name_ of your unit

Here is an example with **1rpx**, where `1rpx` = `1px` but it is transformed into `rem`.

```js
const pluginOptions = {
  units: [
    {
      base: '0.0625rem',
      unit: 'rpx',
    },
  ],
};
```

## Credits

Project based on:

- [joe223/postcss-custom-css-units](https://github.com/joe223/postcss-custom-css-units)
- [csstools/custom-units](https://github.com/csstools/custom-units/)

## License

MIT License &copy; 2023-PRESENT [Jakub Bazgier](https://github.com/tysian)
