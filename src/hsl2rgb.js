// @flow
import hsl2hsv from './hsl2hsv';
import hsv2rgb from './hsv2rgb';

export default function (h: number, s: number, l: number) {
  const hsv = hsl2hsv(h, s, l);
  return hsv2rgb(hsv.h, hsv.s, hsv.v);
}
