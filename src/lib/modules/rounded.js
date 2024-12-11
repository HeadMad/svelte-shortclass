import { parseValue } from '../utils/index.js';

const sizes = {
  none: '0',
  sm: '.125rem',
  md: '.375rem',
  lg: '.5rem',
  xl: '.75rem',
  '2xl': '1rem',
  '3xl': '1.5rem',
  full: '9999px'
};

const sides = {
  t: ['top-left', 'top-right'],
  tl: ['top-left'],
  tr: ['top-right'],
  r: ['top-right', 'bottom-right'],
  b: ['bottom-right', 'bottom-left'],
  bl: ['bottom-left'],
  br: ['bottom-right'],
  l: ['bottom-left', 'top-left'],

  ss: ['start-start'],
  se: ['start-end'],
  ee: ['end-end'],
  es: ['end-start'],
};

const def = '.25rem';

export default function ({ params, raw }) {
  if (!params.length)
    return 'border-radius: ' + def + ';';

  if (params[0] in sides)
    return sides[params[0]].map(side => `border-${side}-radius: ${!params[1] ? def : (vals[params[1]] ?? parseValue(params[1]))};`).join('\n');

    return `border-radius: ${params.map((val) => sizes[val] ?? parseValue(val)).join(' ')};`;

};