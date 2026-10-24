const products = require('../../src/data/products');
const { sortProductsByPrice, getProductById } = require('../../src/catalog');

describe('sortProductsByPrice', () => {
  test("все товары c 'asc' сортируются как [3, 6, 5, 4, 2, 1]", () => {
    expect(sortProductsByPrice(products, 'asc').map(el => el.id)).toEqual([3, 6, 5, 4, 2, 1]);
  });

  test('все товары без направления сортируются как [3, 6, 5, 4, 2, 1]', () => {
    expect(sortProductsByPrice(products).map(el => el.id)).toEqual([3, 6, 5, 4, 2, 1]);
  });

  test("товары [1, 3, 4] c 'asc' сортируются как [3, 4, 1]", () => {
    expect(sortProductsByPrice([getProductById(products, 1), getProductById(products, 3), getProductById(products, 4)], 'asc').map(el => el.id)).toEqual([3, 4, 1]);
  });

  test("все товары c 'desc' сортируются как [1, 2, 4, 5, 6, 3]", () => {
    expect(sortProductsByPrice(products, 'desc').map(el => el.id)).toEqual([1, 2, 4, 5, 6, 3]);
  });

  test("товары [3, 1, 4] c 'desc' сортируются как [1, 4, 3]", () => {
    expect(sortProductsByPrice([getProductById(products, 3), getProductById(products, 1), getProductById(products, 4)], 'desc').map(el => el.id)).toEqual([1, 4, 3]);
  });

  test("товары [5, 2, 6] c 'desc' сортируются как [2, 5, 6]", () => {
    expect(sortProductsByPrice([getProductById(products, 5), getProductById(products, 2), getProductById(products, 6)], 'desc').map(el => el.id)).toEqual([2, 5, 6]);
  });

  test("'asc' не меняет исходный массив [1, 3, 4]", () => {
    const copyProducts = products.filter(({ id }) => [1, 3, 4].includes(id));
    const result = sortProductsByPrice(copyProducts, 'asc');
    expect(copyProducts).toEqual([
      { id: 1, name: 'Наушники', category: 'electronics', price: 49900, stock: 8 },
      { id: 3, name: 'JavaScript для начинающих', category: 'books', price: 18900, stock: 14 },
      { id: 4, name: 'Настольная лампа', category: 'home', price: 27900, stock: 3 }
    ]);
  });

  test("'desc' не меняет исходный массив [1, 3, 4]", () => {
    const copyProducts = products.filter(({ id }) => [1, 3, 4].includes(id));
    const result = sortProductsByPrice(copyProducts, 'desc');
    expect(copyProducts).toEqual([
      { id: 1, name: 'Наушники', category: 'electronics', price: 49900, stock: 8 },
      { id: 3, name: 'JavaScript для начинающих', category: 'books', price: 18900, stock: 14 },
      { id: 4, name: 'Настольная лампа', category: 'home', price: 27900, stock: 3 }
    ]);
  });

  test('направление по умолчанию не меняет исходный массив всех товаров', () => {
    const result = sortProductsByPrice(products);
    expect(products).toEqual([
      { id: 1, name: 'Наушники', category: 'electronics', price: 49900, stock: 8 },
      { id: 2, name: 'Клавиатура', category: 'electronics', price: 35900, stock: 0 },
      { id: 3, name: 'JavaScript для начинающих', category: 'books', price: 18900, stock: 14 },
      { id: 4, name: 'Настольная лампа', category: 'home', price: 27900, stock: 3 },
      { id: 5, name: 'Чехол для ноутбука', category: 'home', price: 24900, stock: 6 },
      { id: 6, name: 'Чистый код', category: 'books', price: 21900, stock: 0 },
    ]);
  });
});
