export default function (dir) {
  return function ({params}) {
    if (!params.length)
      return null;

    if (params[0] === 'auto')
      return `grid-${dir}: auto;`;

    if (params[0] === 'span') {
      if (params[1] === 'full')
        return `grid-${dir}: 1 / -1;`;

      if (/\d+/.test(params[1]))
        return `grid-${dir}: span ${params[1]} / span ${params[1]};`;

      return null;
    }

    if (!params[1])
      return null;

    if (['start', 'end'].includes(params[0])) 
      return `grid-${dir}-${params[0]}: ${params[1]};`;
    
    return null;
  }
}