import {parseValue} from '../utils/index.js';

const sizes = {
  xs: '0.75rem;\nline-height: 1rem',
  sm: '0.875rem;\nline-height: 1.25rem',
  base: '1rem;\nline-height: 1.5rem',
  lg: '1.125rem;\nline-height: 1.75rem',
  xl: '1.25rem;\nline-height: 1.75rem',
  '2xl': '1.5rem;\nline-height: 2rem',
  '3xl': '1.875rem;\nline-height: 2.25rem',
  '4xl': '2.25rem;\nline-height: 2.5rem',
  '5xl': '3rem;\nline-height: 1',
  '6xl': '3.75rem;\nline-height: 1',
  '7xl': '4.5rem;\nline-height: 1',
  '8xl': '6rem;\nline-height: 1',
  '9xl': '8rem;\nline-height: 1'
};

export default function(value) {
  if (/^text-[0-9\.]+(px|em|rem|vh|vw|vmin|vmax|%)?$/i.test(value))
    return 'font-size: ' + parseValue(value.slice(5)) + ';'

  if (/^text-(base|[2-9]?xl|xs|sm|lg)$/i.test(value))
    return 'font-size: ' + sizes[value.slice(5)] + ';';

  return null;
}