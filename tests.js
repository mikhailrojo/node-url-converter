var assert = require('assert');
var module = require('./index.js').default;

var testString = "http://user:pass@host.com:8080/p/a/t/h?query=string#hash";

describe("This module has the following methods: ", function(){
  var testObj = module.parse(testString);

  it("'parse' method", function(){
    assert(typeof testObj.parse === 'function');
  });
  it("'serialize' method", function(){
    assert(typeof testObj.serialize === 'function');
  });
  it("the object has 'addHash' method", function(){
    assert(typeof testObj.addHash === 'function');
  });
  it("'removeHash' method", function(){
    assert(typeof testObj.removeHash === 'function');
  });
  it("'addQuery' method", function(){
    assert(typeof testObj.removeHash === 'function');
  });
  it("'removeQuery' method", function(){
    assert(typeof testObj.removeHash === 'function');
  });
});

describe("Module methods indeed do work", function(){
  var testObj = module.parse(testString);

  it("parse method indeed returns an object", function(){
    assert(typeof testObj === 'object');
  });
  it("serialize method return a string", function(){
    assert(typeof testObj.removeHash().serialize() === 'string');
  });
  it("the 'removeHash' method indeed removes the hash", function(){
    assert(testObj.removeHash().hash === '');
  });
  it("removeQuery indeed removes it", function(){
    assert(testObj.removeQuery().serialize() === 'http://user:pass@host.com:8080/p/a/t/h');
  });
  it("we can add Query as an object", function(){

assert(testObj.removeQuery().addQuery({a: 'tima'}).serialize() === 'http://user:pass@host.com:8080/p/a/t/h?a=tima');
  });
  it("the Query can have more then 1 property", function(){
    assert(testObj.removeQuery().addQuery({a: 'tima', b: true}).serialize() === 'http://user:pass@host.com:8080/p/a/t/h?a=tima&b=true');
  });
  it("we can remove one hash and add another in a chain and get a proper string", function(){
    assert(testObj.removeHash().addHash('yandex').serialize() === 'http://user:pass@host.com:8080/p/a/t/h?a=tima&b=true#yandex');
  });
});
