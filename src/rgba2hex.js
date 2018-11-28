// @flow
import rgba2rgb from './rgba2rgb';
import rgb2hex from './rgb2hex';

export default function(r: number, g: number, b: number, a: number): string {
  const rgb = rgba2rgb(r, g, b, a);
  return rgb2hex(rgb.r, rgb.g, rgb.b);
}
