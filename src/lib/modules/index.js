import {createSpaceModule} from '../utils/index.js';

import font from './font.js';
import not from './not.js';
import italic from './italic.js';
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


export default {
  size,
 font, not, italic, text, bg, box, z, flex, basis, w, h, min, max, 

 block: 'display: block;',

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
  console.log('PADDING TOP')
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

}