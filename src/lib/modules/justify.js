import createAligmentsModule from '../utils/create-aligments-module.js'

const justs = {
  get content() {
    return createAligmentsModule('justify', 'content');
  },
  get self() {
    return createAligmentsModule('justify', 'self');
  },
  get items() {
    return createAligmentsModule('justify', 'content');
  },
};

export default function ({ params }) {
  if (params[0] in justs)
    return justs[params[0]]({ params });

  return null;
}