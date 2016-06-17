## Node url parser ##

This module has the following methods:
* parse() a string converting into an object
* serialize() an object converting into a string
* addHash() adds a hash
* removeHash() removes it
* addQuery() takes an object as argument and convert it into a string
* removerQuery() removes the query

To Run the tests with mocha: "npm test"

### How to use ###
```javascript
var converter = require('node-url-converter');
var testString = "http://user:pass@host.com:8080/p/a/t/h?query=string#hash";

converter.parse(testString).removeHash().addHash('yandex').addQuery({'job': 'given'}). serialize();// http://user:pass@host.com:8080/p/a/t/h?query=string&job=given#yandex
