import {
  createSpaceModule,
  createDirectionModule,
} from '../utils/index.js';

import font from './font.js';
import not from './not.js';
import text from './text.js';
import bg from './bg.js';
import box from './box.js';
import z from './z.js';
import flex from './flex.js';
import basis from './basis.js';
import w from './w.js';
import h from './h.js';
import min from './min.js';
import max from './max.js';
import size from './size.js';
import grid from './grid.js';
import auto from './auto.js';
import gap from './gap.js';
import order from './order.js';
import justify from './justify.js';
import place from './place.js';



export default {
  w, h, min, max, size,


  font, not, text, bg, box, z,

  grid, auto, gap, justify, place,
  get content() {
    return createAligmentsModule('align', 'content');
  },
  get self() {
    return createAligmentsModule('align', 'self');
  },
  get items() {
    return createAligmentsModule('align', 'items');
  },




  flex, order, basis,
  grow({ params: [val] }) {
    return /^\d+$/.test(val) ? 'flex-grow: ' + val + ';' : null;
  },

  shrink({ params: [val] }) {
    return /^\d+$/.test(val) ? 'flex-shrink: ' + val + ';' : null;
  },


  italic: 'font-style: italic;',
  contents: 'display: contents;',
  hidden: 'display: none;',
  block: 'display: block;',

  flow({ params: [value] }) {
    return value === 'root' ? 'display: flow-root;' : null;
  },
  list({ params: [value] }) {
    return value === 'item' ? 'display: list-item;' : null;
  },
  inline({ params: [value] }) {
    return !value ? 'display: inline;'
      : 'display: inline-' + value + ';';
  },







  table({ params }) {
    return !params.length ? 'display: table;'
      : 'display: table-' + params.join('-') + ';';
  },

  get col() {
    return createDirectionModule('column');
  },
  get row() {
    return createDirectionModule('row');
  },


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
  },

};

