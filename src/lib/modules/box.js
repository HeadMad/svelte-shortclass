const values = {
  border: 'border-box',
  content: 'content-box'
}

export default function({raw}) {
  if (raw === 'box-border')
  return 'box-sizing: border-box;';

  if (raw === 'box-content')
  return 'box-sizing: content-box;';

  return null;
};