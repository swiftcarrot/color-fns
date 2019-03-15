// @flow
function convert(num: number) {
  const hex = num.toString(16);
  return hex.length === 1 ? '0' + hex : hex;
}

export default function(r: number, g: number, b: number) {
  return '#' + [convert(r), convert(g), convert(b)].join('');
}
