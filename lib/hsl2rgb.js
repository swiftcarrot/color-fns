// @flow

var hsl2hsv = require('./hsl2hsv');
var hsv2rgb = require('./hsv2rgb');

module.exports = function(h: number, s: number, l: number) {
  var hsv = hsl2hsv(h, s, l);
  return hsv2rgb(hsv.h, hsv.s, hsv.v);
};
