# Sort

## Usage

```
import Sort from 'ship-components-sort';

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
