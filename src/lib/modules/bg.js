import {getColor} from '../utils/index.js'; 

export default function({params}) {
  const color = getColor(params);

  if (color)
    return 'background-color: ' + color + ';';

  return null;
}