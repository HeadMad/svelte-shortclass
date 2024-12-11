const dirs = {
  cols: 'columns',
  rows: 'rows',
};

const flows = {
  col: 'column',
  row: 'row'
}

export default function ({ params }) {
  if (!params.length)
    return 'display: grid;';

  

  if (['cols', 'rows'].includes(params[0]))
    return createDirrections(params);

  if (params[0] === 'flow') {
    if (!params[1])
      return null;

    params[1] = flows[params[1]] ?? params[1];

    return `grid-auto-flow: ${params.join(' ')};`;
  }
    return `grid-auto-flow: ${params[1].map()};`;

};

function createDirrections(params) {
  if (/\d+/.test(params[1]))
    return `grid-template-${dirs[params[0]]}: repeat(${params[1]}, minmax(0, 1fr));`;

  else if (['none', 'subgrid'].includes(params[1]))
    return `grid-template-${dirs[params[0]]}: ${params[1]};`;

  return null;
}