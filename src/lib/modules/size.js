import { parseValue } from '../utils/index.js';

export default function ({ params }) {
  if (!params.length)
    return null;

  let [width, height] = params;
  height = height ?? width;

  return `width: ${parseValue(width)};\nheight: ${parseValue(height)};`;

};