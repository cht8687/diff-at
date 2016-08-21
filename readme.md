# string-remove [![Build Status](https://travis-ci.org/cht8687/diffAt.svg?branch=master)](https://travis-ci.org/cht8687/diffAt)

> Return the index of first difference occurence between given string, number or array

## Install

```
$ npm install --save diff-at
```

## Usage

```js

const diffAt = require('diff-at');

const result = diffAt('abcdefg', 'abcd1fg');

console.log(result);
//=> 4

const result = diffAt(123456789, 12356789);

console.log(result);
//=> 3

const result = diffAt([1,2,3,4,5], [1,2,4,5,6]);

console.log(result);
//=> 2

const result = diffAt([{ a: 1 }, { b: 2}, { c: 4}], [ { a: 1 }, { b: 2}, { c: 3}]);

console.log(result);
//=> 2

const result = diffAt(null, 'abcd1fg');

console.log(result);
//=> 0

```
## API

### diffAt(arg1, arg2)

#### arg1, arg2

Type: `string` or `number` or `array`


## License

MIT © [haotian Chang](https://github.com/cht8687)
