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


export default (value) => {
  if (value === 'flex')
    return 'display: flex;';

  const params = value.slice(5);

  if (params in directions)
    return 'flex-direction: ' + directions[params] + ';';

  if (wraps.includes(params))
    return 'flex-wrap: ' + params + ';';

  if (params in flexes)
    return 'flex: ' + flexes[params] + ';';

  return null;
}