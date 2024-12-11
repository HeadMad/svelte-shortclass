export default function (align, prop) {
  const vals = {
    start: 'flex-start',
    end: 'flex-end',
    between: 'space-between',
    evenly: 'space-evenly',
    around: 'space-around',
  };
  
  return ({params: [value]}) => `${align}-${prop}: ${vals[value] ?? value};`;
}