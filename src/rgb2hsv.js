// @flow
export default function (
  r: number,
  g: number,
  b: number
): { h: number, s: number, v: number } {
  let h, s, v;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const delta = max - min;

  if (delta === 0) {
    h = 0;
  } else if (r === max) {
    h = ((g - b) / delta) % 6;
  } else if (g === max) {
    h = (b - r) / delta + 2;
  } else {
    h = (r - g) / delta + 4;
  }

  h = Math.round(h * 60);
  if (h < 0) h += 360;

  s = Math.round((max === 0 ? 0 : delta / max) * 100);

  v = Math.round((max / 255) * 100);

  return { h, s, v };
}
