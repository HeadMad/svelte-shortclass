import { parseValue } from '../utils/index.js';

const side = {
  t: 'top',
  r: 'right',
  b: 'bottom',
  l: 'left'
};

const sides = {
  x: ['left', 'right'],
  y: ['top', 'bottom']
};

function createSpaceModule(prop, s) {
  return ({params, vars}) => {
    const value = vars ?? params.map(parseValue).join(' ');

    if (!s)
      return `${prop}: ${value};`;

    if (s in side)
      return `${prop}-${side[s]}: ${value};`;

    if (s in sides)
      return sides[s].map(side => `${prop}-${side}: ${value};`).join('\n');

    return null;
  }
};

export default {
  get m() {
    return createSpaceModule('margin');
  },
  get mx() {
    return createSpaceModule('margin', 'x');
  },
  get my() {
    return createSpaceModule('margin', 'y');
  },
  get mt() {
    return createSpaceModule('margin', 't');
  },
  get mb() {
    console.log('MARGIN BOTTOM')
    return createSpaceModule('margin', 'b');
  },
  get ml() {
    return createSpaceModule('margin', 'l');
  },
  get mr() {
    return createSpaceModule('margin', 'r');
  },
  
  
  get p() {
   return createSpaceModule('padding');
  },
  get px() {
    return createSpaceModule('padding', 'x');
  },
  get py() {
    return createSpaceModule('padding', 'y');
  },
  get pt() {
    return createSpaceModule('padding', 't');
  },
  get pb() {
    return createSpaceModule('padding', 'b');
  },
  get pl() {
    return createSpaceModule('padding', 'l');
  },
  get pr() {
    return createSpaceModule('padding', 'r');
  }
};