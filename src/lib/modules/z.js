export default function(value) {
  if (/z-(\d+|auto)/.test(value))
    return 'z-index: ' + value.slice(2) + ';';
  
  return null;
};