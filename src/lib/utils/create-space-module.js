import parseValue from './parse-value.js';

const side = {
  t: 'top',
  r: 'right',
  b: 'bottom',
  l: 'left'
};

const sides = {
  x: ['left', 'right'],
  y: ['top', 'bottom']
};

export default function (prop) {
  return value => {
    if (/^.-(t|r|b|l)-([0-9\.\/]+(px|em|rem|vh|vw|vmin|vmax|%)?|auto)$/i.test(value))
      return `${prop}-${side[value[2]]}: ${parseValue(value.slice(4))};`;


    if (/^.-(x|y)-([0-9\.\/]+(px|em|rem|vh|vw|vmin|vmax|%)?|auto)$/i.test(value))
      return sides[value[2]].map(side => `${prop}-${side}: ${parseValue(value.slice(4))};`).join('\n');


    if (/^.(-([0-9\.\/]+(px|em|rem|vh|vw|vmin|vmax|%)?|auto)){1,4}$/i.test(value))
      return prop + ': ' + value.slice(2).split('-').map(v => parseValue(v)).join(' ') + ';';

    return null;
  }
};
