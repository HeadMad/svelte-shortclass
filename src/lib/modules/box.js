export default function(value) {
  if (value === 'box-border')
  return 'box-sizing: border-box;';

  if (value === 'box-content')
  return 'box-sizing: content-box;';
};