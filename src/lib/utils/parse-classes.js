import modules from '../modules/index.js';
import parseValue from './parse-value.js';

export default function (classNames) {
  const rules = [];
  const classes = [];

  const classNamesList = classNames.trim().split(/\s+/);

  for (const className of classNamesList) {
    let itemRules = checkClass(className, classNamesList);

    if (itemRules)
      rules.push(itemRules);

    else
      classes.push(className);
  }

  return {
    classes,
    css: rules.sort().join('\n')
  };
};


function checkClass(classItem, classNamesList) {
  const [name, ...vars] = classItem.split('--');
  const [moduleName, ...params] = name.split('-');

  if (!(moduleName in modules))
    return null;

  const mod = modules[moduleName];

  if (typeof module === 'string')
    return mod;

  if (typeof mod === 'function')
    return mod({
      name,
      params,
      raw: classItem,
      list: classNamesList,
      get vars() { return varsToString(vars) }
    });

  return null;
}

function varsToString(vars) {
  if (vars.length)
    return vars.reduceRight((acc, v) => {
      const [name, alt] = v.split('|');
      return `var(--${name}${alt ? ', ' + parseValue(alt) : acc ? ', ' + acc : ''})`;
    }, '');
}