import {getColor} from '../utils/index.js'; 

export default function(value) {
  const args = value.slice(3).split('-');

  const color = getColor(args);

  if (color)
    return 'background-color: ' + color + ';';
  
}