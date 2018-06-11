# color-functions

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
// import all functions
const cf = require('color-functions');
const hex2rgb = cf.hex2rgb;

// import single function
// to reduce bundle size with browserify or webpack
const hex2rgb = require('color-functions/dist/hex2rgb');
const cssColor = require('color-functions/dist/css-color');
```

### Available functions

- `hex2rgb`
- `hsv2hex`
- `hsv2rgb`
- `rgb2hex`
- `rgb2hsv`
- `rgba`
- `hsl2hsv`
- `hsv2hsl`
- `hsl2rgb`
- `rgba2rgb`
- `rgba2hex`
- `cssColor`: parse a valid css [color value](https://developer.mozilla.org/en/docs/Web/CSS/color_value) to rgba format

### License

MIT
