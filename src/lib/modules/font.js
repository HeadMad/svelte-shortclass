const families = {
  serif: 'serif',
  sans: 'sans-serif',
  mono: 'monospace',
  system: 'system-ui'
};

const weights = {
  thin: 100,
  extralight: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900
}

export default function (value) {
  let item = value.slice(5);

  if (!item)
    return null;

  if (/\d+/.test(item))
    return 'font-weight: ' + item + ';';

  if (item in families)
    return 'font-family: ' + families[item] + ';';

  if (item in weights)
    return 'font-weight: ' + weights[item] + ';';

  return null;
};
