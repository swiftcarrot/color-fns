// @flow
module.exports = function(r: number, g: number, b: number, a: number) {
  return 'rgba(' + [r, g, b, a / 100].join(',') + ')';
};
