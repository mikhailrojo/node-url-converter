'use strict';

var urlModule = require('url');
function parse(arg) {
  if (Object.prototype.toString.call(arg).slice(8, -1) === 'String') return urlModule.parse(arg);
  if (Object.prototype.toString.call(arg).slice(8, -1) === 'Object') return urlModule.format(arg);else return new Error('This is neither object or string');
}
module.exports = parse;
