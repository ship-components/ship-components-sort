describe('Sort', function(){
  var Sort = require('../src/Sort');

  it('should by a function', function(){
    expect(typeof Sort).toBe('function');
  });

  it('should sort an array of objects by a key', function(){
    var data = [
      {
        name: 'Oranges'
      },
      {
        name: 'Apples'
      },
      {
        name: 'Pickles'
      },
      {
        name: 'Pickles'
      }
    ];
    var sorted = data.slice(0).sort(Sort('name'));
    expect(sorted[0].name).toBe(data[1].name);
    expect(sorted[1].name).toBe(data[0].name);
    expect(sorted[2].name).toBe(data[2].name);
    expect(sorted[3].name).toBe(data[3].name);
  });

  it('should sort an array of objects by a key in reverse', function(){
    var data = [
      {
        name: 'Oranges'
      },
      {
        name: 'Apples'
      },
      {
        name: 'Pickles'
      }
    ];
    var sorted = data.slice(0).sort(Sort('-name'));
    expect(sorted[0].name).toBe(data[2].name);
    expect(sorted[1].name).toBe(data[0].name);
    expect(sorted[2].name).toBe(data[1].name);
  });

  it('should sort an array of objects by multiple keys', function(){
    var data = [
      {
        name: 'Oranges',
        category: 'fruits'
      },
      {
        name: 'Apples',
        category: 'fruits'
      },
      {
        name: 'Pickles',
        category: 'notafruit'
      },
      {
        name: 'Acorn',
        category: 'notafruit'
      }
    ];
    var sorted = data.slice(0).sort(Sort('category', 'name'));
    expect(sorted[0].name).toBe(data[1].name);
    expect(sorted[1].name).toBe(data[0].name);
    expect(sorted[2].name).toBe(data[3].name);
    expect(sorted[3].name).toBe(data[2].name);
  });

  it('should sort an array of objects by a child.key', function(){
    var data = [
      {
        name: 'Oranges',
        item: {
          order: 2
        }
      },
      {
        name: 'Apples',
        item: {
          order: 0
        }
      },
      {
        name: 'Pickles',
        item: {
          order: 1
        }
      }
    ];
    var sorted = data.slice(0).sort(Sort('item.order'));
    expect(sorted[0].name).toBe(data[1].name);
    expect(sorted[1].name).toBe(data[2].name);
    expect(sorted[2].name).toBe(data[0].name);
  });

  it('should sort an array of objects by date', function(){
    var data = [
      {
        name: 'Oranges',
        createdAt: new Date(Date.now() + 1000)
      },
      {
        name: 'Apples',
        createdAt: new Date(Date.now() + 5000)
      },
      {
        name: 'Pickles',
        createdAt: new Date(Date.now() - 1000)
      }
    ];
    var sorted = data.slice(0).sort(Sort('createdAt'));
    expect(sorted[0].name).toBe(data[2].name);
    expect(sorted[1].name).toBe(data[0].name);
    expect(sorted[2].name).toBe(data[1].name);
  });

  describe('sortByDates', function(){
    it('should sort an array of objects by date explicitly', function(){
      var data = [
        {
          name: 'Oranges',
          createdAt: new Date(Date.now() + 1000)
        },
        {
          name: 'Apples',
          createdAt: new Date(Date.now() + 5000)
        },
        {
          name: 'Pickles',
          createdAt: new Date(Date.now() - 1000)
        }
      ];

      var sorted = data.slice(0).sort(Sort.dates('createdAt'));
      expect(sorted[0].name).toBe(data[2].name);
      expect(sorted[1].name).toBe(data[0].name);
      expect(sorted[2].name).toBe(data[1].name);
    });
  });

  it('should sort an array of objects by date strings', function(){
    var data = [
      {
        name: 'Oranges',
        createdAt: new Date(Date.now() + 1000).toString()
      },
      {
        name: 'Apples',
        createdAt: new Date(Date.now() + 5000).toString()
      },
      {
        name: 'Pickles',
        createdAt: new Date(Date.now() - 1000).toString()
      }
    ];
    var sorted = data.slice(0).sort(Sort.dates('createdAt'));
    expect(sorted[0].name).toBe(data[2].name);
    expect(sorted[1].name).toBe(data[0].name);
    expect(sorted[2].name).toBe(data[1].name);
  });
});
