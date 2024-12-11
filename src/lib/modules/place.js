const vals = {
  between: 'space-between',
  around: 'space-around',
  evenly: 'space-evenly',
};

export default function({params: [prop, val]}) {
  if (!val || !prop)
    return null;

  return `palce-${prop}: ${vals[val] ?? val};`;
}