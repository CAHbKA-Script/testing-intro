const products = require('../../src/data/products');
const { filterByCategory } = require('../../src/catalog');

describe('filterByCategory', () => {
  test("'all' возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    expect(filterByCategory(products, 'all'))
      .toEqual([
        { id: 1, name: 'Наушники', category: 'electronics', price: 49900, stock: 8 },
        { id: 2, name: 'Клавиатура', category: 'electronics', price: 35900, stock: 0 },
        { id: 3, name: 'JavaScript для начинающих', category: 'books', price: 18900, stock: 14 },
        { id: 4, name: 'Настольная лампа', category: 'home', price: 27900, stock: 3 },
        { id: 5, name: 'Чехол для ноутбука', category: 'home', price: 24900, stock: 6 },
        { id: 6, name: 'Чистый код', category: 'books', price: 21900, stock: 0 },
      ]);
  });

  test("undefined возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    expect(filterByCategory(products))
      .toEqual([
        { id: 1, name: 'Наушники', category: 'electronics', price: 49900, stock: 8 },
        { id: 2, name: 'Клавиатура', category: 'electronics', price: 35900, stock: 0 },
        { id: 3, name: 'JavaScript для начинающих', category: 'books', price: 18900, stock: 14 },
        { id: 4, name: 'Настольная лампа', category: 'home', price: 27900, stock: 3 },
        { id: 5, name: 'Чехол для ноутбука', category: 'home', price: 24900, stock: 6 },
        { id: 6, name: 'Чистый код', category: 'books', price: 21900, stock: 0 },
      ]);
  });

  test("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    expect(filterByCategory(products, ''))
      .toEqual([
        { id: 1, name: 'Наушники', category: 'electronics', price: 49900, stock: 8 },
        { id: 2, name: 'Клавиатура', category: 'electronics', price: 35900, stock: 0 },
        { id: 3, name: 'JavaScript для начинающих', category: 'books', price: 18900, stock: 14 },
        { id: 4, name: 'Настольная лампа', category: 'home', price: 27900, stock: 3 },
        { id: 5, name: 'Чехол для ноутбука', category: 'home', price: 24900, stock: 6 },
        { id: 6, name: 'Чистый код', category: 'books', price: 21900, stock: 0 },
      ]);
  });

  test("'electronics' возвращает товары с ID [1, 2]", () => {
    expect(filterByCategory(products, 'electronics'))
      .toEqual([
        { id: 1, name: 'Наушники', category: 'electronics', price: 49900, stock: 8 },
        { id: 2, name: 'Клавиатура', category: 'electronics', price: 35900, stock: 0 }
      ]);
  });

  test("'books' возвращает товары с ID [3, 6]", () => {
    expect(filterByCategory(products, 'books'))
      .toEqual([
        { id: 3, name: 'JavaScript для начинающих', category: 'books', price: 18900, stock: 14 },
        { id: 6, name: 'Чистый код', category: 'books', price: 21900, stock: 0 }
      ]);
  });

  test("'home' возвращает товары с ID [4, 5]", () => {
    expect(filterByCategory(products, 'home'))
      .toEqual([
        { id: 4, name: 'Настольная лампа', category: 'home', price: 27900, stock: 3 },
        { id: 5, name: 'Чехол для ноутбука', category: 'home', price: 24900, stock: 6 },
      ]);
  });

  test("'clothes' возвращает пустой массив", () => {
    expect(filterByCategory(products, 'clothes')).toHaveLength(0);
  });

  test("'toys' возвращает пустой массив", () => {
    expect(filterByCategory(products, 'toys')).toEqual([]);
  });

  test("'sports' возвращает пустой массив", () => {
    expect(filterByCategory(products, 'sports')).toEqual([]);
  });
});
