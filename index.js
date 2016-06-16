'use strict';

var urlModule = require('url');
urlModule.oldParse = urlModule.parse;

urlModule.parse = function(url){
  var mi = urlModule.oldParse(url);
  mi.serialize = function(){
    return urlModule.format(this);
  };
  mi.removeHash = function(){
    this.hash = '';
    return this;
  };
  return mi;
}


module.exports = urlModule;




// require('node-url-converter').parse('....').addParam(...).serialize()
//
// var a = www.misha.ru/#tima
// parse(a);
// объект парсинга + с дополнительными методами.
// {hash: '#tima', removeHash: function}
// parse(a).removeHash()
// должен возвращаться объект {hash: ''}
