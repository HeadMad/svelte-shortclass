import {parseValue} from '../utils/index.js';

const fixed = {
  full: '100%',
  auto: 'auto',
}

export default (value) => {
  const params = value.slice(6);

  if (params in fixed)
    return 'flex-basis: ' + fixed[params] + ';';

  if (/^[0-9\.\/]+(px|em|rem|vh|vw|vmin|vmax|%)?$/.test(params))
    return 'flex-basis: ' + parseValue(params) + ';';

  return 0;
};