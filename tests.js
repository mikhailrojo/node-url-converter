var assert = require('assert');
var module = require('./index.js');

var testString = "http://user:pass@host.com:8080/p/a/t/h?query=string#hash";

describe("Module parses the string", function(){
  var testObj = module.parse(testString);

  it("parse method returns an object", function(){
    assert(typeof testObj === 'object');
  });
  it("the hash of returned object is 'hash'", function(){
    assert(testObj.hash === '#hash');
  });
  it("the returning object has a 'removeHash' method", function(){
    assert(typeof testObj.removeHash === 'function');
  });
  it("the 'removeHash' method indeed removes the hash", function(){
    assert(testObj.removeHash().hash === '');
  });
  it("we can serialize the result without hash at the end and get a string", function(){
    assert(typeof testObj.removeHash().serialize() === 'string');
  });
  it("the result is the test object without hash", function(){
    assert(testObj.removeHash().serialize() === "http://user:pass@host.com:8080/p/a/t/h?query=string");
  });


})
