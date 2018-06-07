// @flow
// based on component/color-parser

const hsl2rgb = require('./hsl2rgb');
const colors = require('./_colors');

function parse(str: string) {
  return (
    named(str) ||
    hex3(str) ||
    hex6(str) ||
    rgb(str) ||
    rgba(str) ||
    hsl(str) ||
    hsla(str)
  );
}

function named(str) {
  const c = colors[str.toLowerCase()];
  if (!c) return;
  return {
    r: c[0],
    g: c[1],
    b: c[2],
    a: 100
  };
}

function rgb(str) {
  const m = str.match(/rgb\(([^)]+)\)/);
  if (m) {
    const parts = m[1].split(/ *, */).map(Number);
    return {
      r: parts[0],
      g: parts[1],
      b: parts[2],
      a: 100
    };
  }
}

function rgba(str) {
  const m = str.match(/rgba\(([^)]+)\)/);
  if (m) {
    const parts = m[1].split(/ *, */).map(Number);

    return {
      r: parts[0],
      g: parts[1],
      b: parts[2],
      a: parts[3] * 100
    };
  }
}

function hex6(str) {
  if ('#' === str[0] && 7 === str.length) {
    return {
      r: parseInt(str.slice(1, 3), 16),
      g: parseInt(str.slice(3, 5), 16),
      b: parseInt(str.slice(5, 7), 16),
      a: 100
    };
  }
}

function hex3(str) {
  if ('#' === str[0] && 4 === str.length) {
    return {
      r: parseInt(str[1] + str[1], 16),
      g: parseInt(str[2] + str[2], 16),
      b: parseInt(str[3] + str[3], 16),
      a: 100
    };
  }
}

function hsl(str) {
  const m = str.match(/hsl\(([^)]+)\)/);

  if (m) {
    const parts = m[1].split(/ *, */);

    const h = parseInt(parts[0], 10);
    const s = parseInt(parts[1], 10);
    const l = parseInt(parts[2], 10);

    const rgb = hsl2rgb(h, s, l);

    return { ...rgb, a: 100 };
  }
}

function hsla(str) {
  const m = str.match(/hsla\(([^)]+)\)/);
  if (m) {
    const parts = m[1].split(/ *, */);

    console.log(parts);

    const h = parseInt(parts[0], 10);
    const s = parseInt(parts[1], 10);
    const l = parseInt(parts[2], 10);
    const a = parseInt(parseFloat(parts[3]) * 100, 10);

    const rgb = hsl2rgb(h, s, l);

    return { ...rgb, a };
  }
}

module.exports = parse;
