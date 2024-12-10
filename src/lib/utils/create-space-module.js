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

export default function (prop, s) {
  return ({params, vars}) => {
    const value = vars ?? params.map(parseValue).join(' ');

    if (!s)
      return `${prop}: ${value};`;

    if (s in side)
      return `${prop}-${side[s]}: ${value};`;

    if (s in sides)
      return sides[s].map(side => `${prop}-${side}: ${value};`).join('\n');

    return null;
  }
};
