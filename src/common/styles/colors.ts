export const toRGB = (color: number[]): string => `rgb(${color.join(",")})`;

export const toRGBA = (color: number[], alpha: number): string =>
  `rgb(${color.join(",")}, ${alpha})`;

export const colors = {
  black: [0, 0, 0],
  white: [255, 255, 255],
  dark: [19, 3, 3] /* Xiketic #130303 */,
  light: [243, 238, 226] /* Alabaster #F3EEE2 */,
  red: [217, 77, 8] /* Flame #D94D08 */,
  yellow: [255, 186, 8] /* Selective Yellow #FFBA08 */,
  blue: [27, 98, 136] /* Blue Sapphire #1B6288 */,
};
