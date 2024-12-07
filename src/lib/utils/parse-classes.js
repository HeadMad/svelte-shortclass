import modules from '../modules/index.js';

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


function checkClass(className, classNamesList) {
  const moduleName = className.split('-')[0];

  if (moduleName in modules)
    return modules[moduleName](className, classNamesList);

  return null;
}