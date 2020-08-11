// @flow
import hex2rgb from './hex2rgb';
import rgb2hsv from './rgb2hsv';

export default function (hex: string) {
  const { r, g, b } = hex2rgb(hex);
  return rgb2hsv(r, g, b);
}
