const products = require('../../src/data/products');
const { searchProducts } = require('../../src/catalog');

describe('searchProducts', () => {
  test("'Наушники' возвращает товар с ID 1", () => {
    expect(searchProducts(products, 'Наушники')).toEqual([{ id: 1, name: 'Наушники', category: 'electronics', price: 49900, stock: 8 }]);
  });

  test("'Чистый код' возвращает товар с ID 6", () => {
    expect(searchProducts(products, 'Чистый код')).toEqual([{ id: 6, name: 'Чистый код', category: 'books', price: 21900, stock: 0 }]);
  });

  test("'Настольная лампа' возвращает товар с ID 4", () => {
    expect(searchProducts(products, 'Настольная лампа')).toEqual([{ id: 4, name: 'Настольная лампа', category: 'home', price: 27900, stock: 3 }]);
  });

  test("'javascript' возвращает товар с ID 3", () => {
    expect(searchProducts(products, 'javascript')).toEqual([{ id: 3, name: 'JavaScript для начинающих', category: 'books', price: 18900, stock: 14 }]);
  });

  test("'ЧЕХОЛ' возвращает товар с ID 5", () => {
    expect(searchProducts(products, 'ЧЕХОЛ')).toEqual([{ id: 5, name: 'Чехол для ноутбука', category: 'home', price: 24900, stock: 6 }]);
  });

  test("'наушники' возвращает товар с ID 1", () => {
    expect(searchProducts(products, 'наушники')).toEqual([{ id: 1, name: 'Наушники', category: 'electronics', price: 49900, stock: 8 }]);
  });

  test("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    expect(searchProducts(products, '').map(el => el.id)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("строка из пробелов возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    expect(searchProducts(products, '   '))
      .toEqual([
        { id: 1, name: 'Наушники', category: 'electronics', price: 49900, stock: 8 },
        { id: 2, name: 'Клавиатура', category: 'electronics', price: 35900, stock: 0 },
        { id: 3, name: 'JavaScript для начинающих', category: 'books', price: 18900, stock: 14 },
        { id: 4, name: 'Настольная лампа', category: 'home', price: 27900, stock: 3 },
        { id: 5, name: 'Чехол для ноутбука', category: 'home', price: 24900, stock: 6 },
        { id: 6, name: 'Чистый код', category: 'books', price: 21900, stock: 0 },
      ]);
  });

  test("'\\t\\n' возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    expect(searchProducts(products, '\t\n')).toEqual(products);
  });

});
