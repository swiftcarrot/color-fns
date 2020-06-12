export default function hex2alpha(aa) {
  return Math.round((parseInt('0x' + aa, 16) / 255) * 100);
}
