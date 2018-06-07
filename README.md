# color-functions

[![Build Status](https://travis-ci.org/wangzuo/color-functions.svg)](https://travis-ci.org/wangzuo/color-functions) [![codecov.io](http://codecov.io/github/wangzuo/color-functions/coverage.svg?branch=master)](http://codecov.io/github/wangzuo/color-functions?branch=master)

color functions for node and browser (`browserify`, `webpack`, ...)

### Installation

```sh
npm install color-functions --save
```

### Usage

```javascript
// import all functions
var cf = require('color-functions');
var hex2rgb = cf.hex2rgb;

// import single function
// (to reduce bundle script size with browserify or webpack)
var hex2rgb = require('color-functions/lib/hex2rgb');
var cssColor = require('color-functions/lib/css-color');
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
