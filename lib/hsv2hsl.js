// @flow

module.exports = function(h: number, s: number, v: number) {
  var hh = ((200 - s) * v) / 100;

  return {
    h: h,
    s: (s * v) / (hh < 100 ? hh : 200 - hh),
    l: hh / 2
  };
};
