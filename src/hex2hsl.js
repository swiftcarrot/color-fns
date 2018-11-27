// @flow
import hex2rgb from './hex2rgb';
import rgb2hsv from './rgb2hsv';
import hsv2hsl from './hsv2hsl';

export default function(hex: string) {
  var rgb = hex2rgb(hex);
  var hsv = rgb2hsv(rgb.r, rgb.g, rgb.b);
  return hsv2hsl(hsv.h, hsv.s, hsv.v);
}
