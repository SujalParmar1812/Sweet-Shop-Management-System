const SweetShop = require('../src/sweetShop')

describe('sweet shop management', () => {
  let shop;

  beforeEach(() => {
    shop = new SweetShop();
  });

  test('should add a sweet and check by array length', () => {
    const sweet = {
      id: 14,
      name: 'Snickers',
      category: 'Chocolate',
      price: 20,
      quantity: 30
    };

    shop.addSweet(sweet);
    expect(shop.sweets.length).toBeGreaterThan(1);
  });

  test('should get data of all the sweets available in the shop', () => {
    const sweets = shop.getAllSweets();
    expect(sweets.length).toBeGreaterThan(1);
  })
  
});
