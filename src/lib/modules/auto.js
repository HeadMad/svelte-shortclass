const dirs = {
  cols: 'columns',
  rows: 'rows'
};

const vals = {
  auto: 'auto',
  min: 'min-content',
  max: 'max-content',
  fr: 'minmax(0, 1fr)'
}

export default function({params: [dir, val]}) {
  if (!(dir in dirs) || !(val in vals))
    return null;

  return `grid-auto-${dirs[dir]}: ${vals[val]};`;
}