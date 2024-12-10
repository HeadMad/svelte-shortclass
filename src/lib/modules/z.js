export default function({params: [value]}) {
  if (/^(\d+|auto)/.test(value))
    return 'z-index: ' + value + ';';
  
  return null;
};