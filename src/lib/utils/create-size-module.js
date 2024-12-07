import parseValue from './parse-value.js';

const props = {
  w: 'width',
  h: 'height',
};

const fixed = {
  full: '100%',
  min: 'min-content',
  max: 'max-content',
  fit: 'fit-content'
};

export default function (value) {
  const params = value.split('-');

  if (params.length === 1)
    return null;

  let [minmax, ltr, val] = params;

  if (params.length === 2)
    [minmax, ltr, val] = [null, minmax, ltr];

  const autoscreen = {
    auto: 'auto',
    screen: '100v' + ltr
  };

  const prop = props[ltr];

  if (/^[0-9\.\/]+(\w{1,4}|%)?$/.test(val))
    return `${minmax ? minmax + '-' : ''}${prop}: ${parseValue(val)};`;

  if (params.length === 3 && val in fixed)
    return `${minmax}-${prop}: ${fixed[val]};`;

  if (params.length === 2)
    for (let vals of [fixed, autoscreen])
      if (val in vals)
        return `${prop}: ${vals[val]};`;

  return null;
};