// @flow
import hsv2rgb from './hsv2rgb';
import rgb2hex from './rgb2hex';

export default function (h: number, s: number, v: number) {
  const rgb = hsv2rgb(h, s, v);
  return rgb2hex(rgb.r, rgb.g, rgb.b);
}
