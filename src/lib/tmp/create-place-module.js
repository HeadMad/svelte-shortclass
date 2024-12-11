const vals = {
  between: 'space-between',
  around: 'space-around',
  evenly: 'space-evenly',
};

export default function (prop) {
  return ({params:[val]}) => `palce-${prop}: ${vals[val] ?? val};`;
}