// @flow
export default function(h: number, s: number, l: number) {
  s *= (l < 50 ? l : 100 - l) / 100;

  return {
    h: h,
    s: ((2 * s) / (l + s)) * 100,
    v: l + s
  };
}
