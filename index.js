'use strict';

var urlModule = require('url');
var test = "http://user:pass@host.com:8080/p/a/t/h?query=string#hash";

urlModule.Url.prototype.removeHash = function(){
    this.hash = '';
    return this;
};
urlModule.Url.prototype.serialize = function(){
   return urlModule.format(this);
};

urlModule.Url.prototype.addHash = function(newHash){
  var resultHash = '#'.concat(newHash);
  if(this.hash){
    this.hash = this.hash.concat(resultHash);
  }else{
    this.hash = resultHash;
  }
  return this;
}
urlModule.Url.prototype.removeQuery = function(){
  this.query = '';
  this.search = '';
  return this;
}
urlModule.Url.prototype.addQuery = function(a){
  var key, value, loops = 0, resultQuery;
  this.query === '' ? resultQuery = '': resultQuery = this.query+'&';
  for (var i in a){
    ++loops;
    key = i;
    value = a[i];
    resultQuery += key + "=" + value;
    if(loops > 0){
      resultQuery += '&';
    }
  }
  this.search = "?"+resultQuery.slice(0, -1);
  return this;
}
module.exports = urlModule;
