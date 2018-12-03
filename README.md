# color-functions

[![npm](https://img.shields.io/npm/v/color-functions.svg)](https://www.npmjs.com/package/color-functions)
[![Build Status](https://travis-ci.org/wangzuo/color-functions.svg)](https://travis-ci.org/wangzuo/color-functions) [![codecov.io](http://codecov.io/github/wangzuo/color-functions/coverage.svg?branch=master)](http://codecov.io/github/wangzuo/color-functions?branch=master)

Color functions for node and browser (via `browserify`, `webpack`, ...)

### Installation

```sh
npm install color-functions --save
# or
yarn add color-functions
```

### Usage

```javascript
// commonjs
const { hex2rgb } = require('color-functions');

// es module
import { hex2rgb, cssColor } from 'color-functions';
import * as cf from 'color-functions';
```

### Available functions

- `cssColor`: parse a valid css [color value](https://developer.mozilla.org/en/docs/Web/CSS/color_value) to rgba format
- `hex2hsl`
- `hex2rgb`
- `hsl2hsv`
- `hsl2rgb`
- `hsv2hex`
- `hsv2hsl`
- `hsv2rgb`
- `rgb2hex`
- `rgb2hsv`
- `rgba`
- `rgba2hex`
- `rgba2rgb`

check [test](https://github.com/wangzuo/color-functions/blob/master/src/__tests__/index.js) for more examples

### License

MIT
