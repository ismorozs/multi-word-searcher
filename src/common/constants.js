export const EXTENSION_ID = 'multi-string-search-extension-' + browser.runtime.id.replace(/[{}@]/g, '');
export const FIND_HELPER_CLASS = EXTENSION_ID + '-find-helper';

export const COLORS = [
  '255, 255, 25',
  '60, 180, 75',
  '230, 25, 75',
  '0, 130, 200',
  '245, 130, 48',
  '145, 30, 180',
  '240, 50, 230',
  '128, 128, 128',
  '210, 245, 60',
  '250, 190, 190',
];

export const FIND_SUGGESTION = 'Find text on page';

const DIGIT_KEYS = Array(10).fill(48).reduce((a , v, i) => (a[i] = 48 + i) && a , {});

export const KEYBOARD_KEYS = {
  ...DIGIT_KEYS,
  ESC: 27,
  ENTER: 13,
  SHIFT: 16,
  CTRL: 17,
  ALT: 18,
  DELETE: 46,
  BACKSPACE: 8,
  w: 87,
  e: 69,
  r: 82,
  a: 65,
  s: 83,
  d: 68,
  f: 70,
  c: 67,
  b: 66,
  UP: 38,
  LEFT: 37,
  DOWN: 40,
  RIGHT: 39,
};
