import { parseValue } from '../utils/index.js'

const dirs = {
  x: 'row',
  y: 'column'
};

export default function ({ params }) {
  if (!params.length)
    return null;

  if (params[0] in dirs) {
    if (!params[1])
      return null;

    return `${dirs[params[1]]}-gap: ${parseValue(params[1])};`;
  }

  return 'gap: ' + params.map(parseValue).join(' ') + ';'
}