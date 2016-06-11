Тестовое задание.
Написать node.js-модуль, экспортирующий методы для работы с урлами:
- парсинг урла из строки в объект (urlpath, объект с query-параметрами и другие сущности, которые можно выделить из урла);
- сериализация урла в строку по объекту с сущностями урла.

Исходники модуля должны быть написаны в синтаксисе ES2015 (в т.ч. используя модульную систему ES2015), но предоставлять он должен код в ES5.
Для сборки исходников в dist (предоставляемый модулем код) использовать babeljs (http://babeljs.io/).

1. Модуль написан
2. Экспортирующие методы присутствуют
3. Модуль написан на ES5 и ES6


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
