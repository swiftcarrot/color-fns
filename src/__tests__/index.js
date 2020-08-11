import * as cf from '../';

const eps = 1;

test('hex2rgb', function () {
  expect(cf.hex2rgb('3498db')).toEqual({ r: 52, g: 152, b: 219 });
  expect(cf.hex2rgb('#3498db')).toEqual({ r: 52, g: 152, b: 219 });
  expect(cf.hex2rgb('#aabbcc')).toEqual({ r: 170, g: 187, b: 204 });
  expect(cf.hex2rgb('#abc')).toEqual({ r: 170, g: 187, b: 204 });
});

test('hex2hsv', function () {
  expect(cf.hex2hsv('000000')).toEqual({ h: 0, s: 0, v: 0 });
  expect(cf.hex2hsv('#ffffff')).toEqual({ h: 0, s: 0, v: 100 });
  expect(cf.hex2hsv('#3599db')).toEqual({ h: 204, s: 76, v: 86 });
});

test('hex2alpha', () => {
  expect(cf.hex2alpha('ff')).toEqual(100);
  expect(cf.hex2alpha('f7')).toEqual(97);
  expect(cf.hex2alpha('38')).toEqual(22);
  expect(cf.hex2alpha('00')).toEqual(0);
});

test('hsv2hex', function () {
  expect(cf.hsv2hex(204, 76, 86)).toBe('#3599db');
});

test('rgb2hex', function () {
  expect(cf.rgb2hex(52, 152, 219)).toBe('#3498db');
});

test('rgb2hsv', function () {
  expect(cf.rgb2hsv(219, 152, 52)).toEqual({ h: 36, s: 76, v: 86 });
  expect(cf.rgb2hsv(52, 219, 152)).toEqual({ h: 156, s: 76, v: 86 });
  expect(cf.rgb2hsv(52, 152, 219)).toEqual({ h: 204, s: 76, v: 86 });
});

test('rgba', function () {
  expect(cf.rgba(52, 152, 219, 70)).toBe('rgba(52,152,219,0.7)');
});

test('hsv2hsl', function () {
  const hsl = cf.hsv2hsl(204.1, 76.3, 85.9);

  expect(Math.abs(hsl.h - 204.1) < eps).toBe(true);
  expect(Math.abs(hsl.s - 69.9) < eps).toBe(true);
  expect(Math.abs(hsl.l - 53.1) < eps).toBe(true);
});

test('hsl2hsv', function () {
  const hsv = cf.hsl2hsv(204.1, 69.9, 53.1);

  expect(Math.abs(hsv.h - 204.1) < eps).toBe(true);
  expect(Math.abs(hsv.s - 76.3) < eps).toBe(true);
  expect(Math.abs(hsv.v - 85.9) < eps).toBe(true);
});

test('hsl2rgb', function () {
  expect(cf.hsl2rgb(204, 70, 53)).toEqual({ r: 51, g: 152, b: 219 });
});

test('css-color', function () {
  expect(cf.cssColor('blue')).toEqual({ r: 0, g: 0, b: 255, a: 100 });
  expect(cf.cssColor('rebeccapurple')).toEqual({
    r: 102,
    g: 51,
    b: 153,
    a: 100,
  });

  expect(cf.cssColor('blue')).toEqual(cf.cssColor('rgb(0,0,255)'));

  expect(cf.cssColor('Blue')).toEqual({ r: 0, g: 0, b: 255, a: 100 });
  expect(cf.cssColor('BLUE')).toEqual({ r: 0, g: 0, b: 255, a: 100 });
  expect(cf.cssColor('Rebeccapurple')).toEqual({
    r: 102,
    g: 51,
    b: 153,
    a: 100,
  });
  expect(cf.cssColor('REBECCAPURPLE')).toEqual({
    r: 102,
    g: 51,
    b: 153,
    a: 100,
  });

  expect(cf.cssColor('#fc0')).toEqual({ r: 255, g: 204, b: 0, a: 100 });
  expect(cf.cssColor('#ffcc00')).toEqual({ r: 255, g: 204, b: 0, a: 100 });
  expect(cf.cssColor('rgb(255, 204, 0)')).toEqual({
    r: 255,
    g: 204,
    b: 0,
    a: 100,
  });
  expect(cf.cssColor('rgba(255, 204, 0, 1)')).toEqual({
    r: 255,
    g: 204,
    b: 0,
    a: 100,
  });

  expect(cf.cssColor('rgba(0,0,0,0.5)')).toEqual({ r: 0, g: 0, b: 0, a: 50 });
  expect(cf.cssColor('rgba(0,0,0,.5)')).toEqual({ r: 0, g: 0, b: 0, a: 50 });
  expect(cf.cssColor('rgba(0,0,0,.75)')).toEqual({ r: 0, g: 0, b: 0, a: 75 });
  expect(cf.cssColor('rgba(0,0,0,.755)')).toEqual({
    r: 0,
    g: 0,
    b: 0,
    a: 75.5,
  });

  expect(cf.cssColor('hsl(0, 100%, 50%)')).toEqual({
    r: 255,
    g: 0,
    b: 0,
    a: 100,
  });

  expect(cf.cssColor('hsla(240,100%,50%,0.05)')).toEqual({
    r: 0,
    g: 0,
    b: 255,
    a: 5,
  });

  expect(cf.cssColor('hsla(240, 100%, 50%, 0.05)')).toEqual({
    r: 0,
    g: 0,
    b: 255,
    a: 5,
  });
});

test('rgba2rgb', function () {
  expect(cf.rgba2rgb(50, 100, 200, 70)).toEqual({ r: 111, g: 146, b: 216 });
});

test('rgba2hex', function () {
  expect(cf.rgba2hex(50, 100, 200, 70)).toBe('#6f92d8');
});
