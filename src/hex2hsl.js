// @flow
import hex2rgb from './hex2rgb';
import rgb2hsv from './rgb2hsv';
import hsv2hsl from './hsv2hsl';

export default function (hex: string) {
  const { r, g, b } = hex2rgb(hex);
  const { h, s, v } = rgb2hsv(r, g, b);
  return hsv2hsl(h, s, v);
}
