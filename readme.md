# Sort
Generates sort comparator function for the native Array.prototype.sort function

[![Build Status](http://img.shields.io/travis/ship-components/ship-components-sort/master.svg?style=flat)](https://travis-ci.org/ship-components/ship-components-sort)
[![Coverage](http://img.shields.io/coveralls/ship-components/ship-components-sort.svg?style=flat)](https://coveralls.io/github/ship-components)
[![devDependencies](https://img.shields.io/david/dev/ship-components/ship-components-sort.svg?style=flat)](https://david-dm.org/ship-components/ship-components-sort#info=devDependencies)

## Usage

```js
var Sort = require('ship-components-sort');

let data = [
  {
    name: 'Apples',
    group: 'Fruit'
  },
  {
    name: 'oranges',
    group: 'Fruit'
  },
  {
    name: 'Lettuce',
    group: 'Vegetable'
  }
];

data.sort(Sort('group', 'name'));
```

## Tests
1. `npm install`
2. `npm test`

## License
The MIT License (MIT)

Copyright (c) 2015 Isaac Suttell

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
