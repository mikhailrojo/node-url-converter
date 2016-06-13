## Node url parser ##

This module essentially takes one argument and converts it.
* if this arguments is a string - it converts it into an object
* if this argument is an object - it converts it into a url-string

Apparently it is just a wrapper for node native module 'url'.
* index.js is a module written in ES05
* es5.js is a module written in ES06


### How to use ###
```javascript
var converter = require('node-url-converter');
var object = {
  protocol : 'http',
  hostname : 'www.yandex.ru',
  port: 3000,
  pathname: '/blog',
  hash: 'top'
}
converter(object); // converts to http://www.yandex.ru:3000/blog#top
converter('http://yandex.ru/misha?query')
// converts to {protocol: 'http:',
//   slashes: true,
//   auth: null,
//   host: 'yandex.ru',
//   port: null,
//   hostname: 'yandex.ru',
//   hash: null,
//   search: '?query',
//   query: 'query',
//   pathname: '/misha',
//   path: '/misha?query',
//   href: 'http://yandex.ru/misha?query' }
