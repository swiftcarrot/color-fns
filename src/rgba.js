// @flow
export default function(r: number, g: number, b: number, a: number): string {
  return 'rgba(' + [r, g, b, a / 100].join(',') + ')';
}
