const families = {
  serif: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
  sans: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
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

export default function ({params: [value]}) {

  if (!value)
    return null;

  if (/\d+/.test(value))
    return 'font-weight: ' + value + ';';

  if (value in families)
    return 'font-family: ' + families[value] + ';';

  if (value in weights)
    return 'font-weight: ' + weights[value] + ';';

  return null;
};
