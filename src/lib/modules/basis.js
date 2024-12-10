import {parseValue} from '../utils/index.js';

const fixed = {
  full: '100%',
  auto: 'auto',
}

export default ({params: [value]}) => {

  if (value in fixed)
    return 'flex-basis: ' + fixed[value] + ';';

  if (/^[0-9\.\/]+(px|em|rem|vh|vw|vmin|vmax|%)?$/.test(value))
    return 'flex-basis: ' + parseValue(value) + ';';

  return 0;
};