import {parseValue} from '../utils/index.js';

const vals = {
  full: '100%',
  auto: 'auto',
}

export default  function ({params:[value]}) {
  return `flex-basis: ${vals[value] ?? parseValue(value)};`
};