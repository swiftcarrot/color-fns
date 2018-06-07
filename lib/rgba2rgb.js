// @flow

module.exports = function(r: number, g: number, b: number, a: number) {
  a = a / 100;

  return {
    r: parseInt((1 - a) * 255 + a * r, 10),
    g: parseInt((1 - a) * 255 + a * g, 10),
    b: parseInt((1 - a) * 255 + a * b, 10)
  };
};
