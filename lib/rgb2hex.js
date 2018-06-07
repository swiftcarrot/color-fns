// @flow

function _convert(num: number) {
  var hex = num.toString(16);
  return hex.length === 1 ? '0' + hex : hex;
}

module.exports = function(r: number, g: number, b: number) {
  return [_convert(r), _convert(g), _convert(b)].join('');
};
