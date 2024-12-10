const directions = {
  row: 'row',
  'row-reverse': 'row-reverse',
  col: 'column',
  'col-reverse': 'column-reverse'
};

const wraps = ['wrap', 'nowrap', 'wrap-reverse'];

const flexes = {
  1: '1 1 0%',
  auto: '1 1 auto',
  initial: '0 1 auto',
  none: 'none'
};


export default ({raw, params: [value]}) => {
  if (raw === 'flex')
    return 'display: flex;';

  if (value in directions)
    return 'flex-direction: ' + directions[value] + ';';

  if (wraps.includes(value))
    return 'flex-wrap: ' + value + ';';

  if (value in flexes)
    return 'flex: ' + flexes[value] + ';';

  return null;
}