import { walk } from 'estree-walker';
import {parseClasses} from './utils/index.js';
import { createHash } from 'crypto';

import {
	VERSION,
	compile,
	compileModule,
	migrate,
	parse,
} from 'svelte/compiler';

export default function() {

  return {
    name: 'shortclass',
    markup({ content, filename }) {
      if (!filename.endsWith('+page.svelte'))
        return;

      const ast = parse(content, {
        modern: true,
        filename
      });

      let code = content;

      const getIndex = createGetIndex(content.length);

      const styles = [];
      
      walk(ast, {
        async enter(node) {
          if (node.type !== 'RegularElement')
            return;

          for(let attr of node.attributes) {
            if (attr.type !== 'Attribute')
              return;

            if (attr.name !== 'class')
              return;


            if (!attr.value.length)
              return;
            if (attr.value[0].start === -1)
              return;

            let beforeEnd = getIndex(code.length, attr.value[0].start);

            let afterStart = attr.value[attr.value.length - 1].end;

            if (afterStart === -1)
              afterStart = attr.value[attr.value.length - 2].end;

            afterStart = getIndex(code.length, afterStart);
            

            let {css, classes} = parseClasses(code.slice(beforeEnd, afterStart));

            if (css) {
              let className = 'sc-' + createHash('md5').update(css).digest('hex');

              css = `:global(.${className}) {\n${css}\n}`;
              styles.push(css);
              classes.push(className);
            }

            code = code.slice(0, beforeEnd) + classes.join(' ') + code.slice(afterStart);

          };
        }
      });

      if (styles.length) {
        if (!ast.css) {
          code += '\n<style>\n' + styles.join('\n\n') + '\n</style>\n';

        } else {
          const insertIndex = getIndex(code.length, ast.css.content.end);
          code = code.slice(0, insertIndex) + styles.join('\n\n') + code.slice(insertIndex);

        }
      }

      return { code }
    },
    // script({ content, filename }) {},
    // style({ content, filename }) {},
  }
};

function createGetIndex(sourceLength) {
  return (editedLength, sourceIndex) => editedLength - (sourceLength - sourceIndex);
}

