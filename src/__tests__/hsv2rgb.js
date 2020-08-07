import hsv2rgb from '../hsv2rgb';

test('hsv2rgb', () => {
  expect(hsv2rgb(36, 76, 86)).toEqual({ r: 219, g: 153, b: 53 });
  expect(hsv2rgb(156, 76, 86)).toEqual({ r: 53, g: 219, b: 153 });
  expect(hsv2rgb(204, 76, 86)).toEqual({ r: 53, g: 153, b: 219 });
  expect(hsv2rgb(300, 50, 50)).toEqual({ r: 128, g: 64, b: 128 });
  expect(hsv2rgb(360, 50, 50)).toEqual({ r: 128, g: 64, b: 64 });
});
