// @flow
import hex2hsv from './hex2hsv';
import hsv2hsl from './hsv2hsl';

export default function (hex: string) {
  const { h, s, v } = hex2hsv(hex);
  return hsv2hsl(h, s, v);
}
