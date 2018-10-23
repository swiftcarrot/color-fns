// @flow
var hex2rgb = require('./hex2rgb');
var rgb2hsv = require('./rgb2hsv');
var hsv2hsl = require('./hsv2hsl');

module.exports = function(hex: string) {
  var rgb = hex2rgb(hex);
  var hsv = rgb2hsv(rgb.r, rgb.g, rgb.b);
  return hsv2hsl(hsv.h, hsv.s, hsv.v);
};
