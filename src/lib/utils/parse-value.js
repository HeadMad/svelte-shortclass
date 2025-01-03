export default function (value) {
  if (/^[0-9\.]+$/.test(value))
    return +value * .25 + 'rem';

  if (/^\d+\/\d+(\w{,4}|%)?$/.test(value))
    return value.replace(/^(\d+)\/(\d+)(\w{,4}|%)?$/, (_, $1, $2, $3) => +$1 / +$2 * 100 + ($3 || '%'));

  return value;
} 