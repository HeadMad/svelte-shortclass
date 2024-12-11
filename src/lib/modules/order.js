const vals = {
  first: '-9999',
  last: '9999',
  none: '0'
};

export default function ({params: [val]}) {
  return val in vals || (/^\d+$/.test(val)) ? `order: ${vals[val] ?? val};` : null;
};