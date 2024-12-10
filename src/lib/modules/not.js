

export default function({params: [value]}) {
  if (value === 'italic')
    return 'font-style: normal;';

  return null;
};

