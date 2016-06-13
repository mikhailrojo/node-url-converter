import * as m from 'url';
export default function (arg) {
  if(Object.prototype.toString.call(arg).slice(8, -1) === 'String') return m.parse(arg);
  if(Object.prototype.toString.call(arg).slice(8, -1) === 'Object') return m.format(arg);
  else return new Error('This is neither object or string');
}
