const SweetShop = require('../src/sweetShop')

describe('sweet shop management', () => {
  let shop;

  beforeEach(() => {
    shop = new SweetShop();
  });

  test('should add a sweet and check by array length', () => {
    const sweet = {
      id: 13,
      name: 'Badam Halwa',
      category: 'Nut-based',
      price: 50,
      quantity: 10
    };

    shop.addSweet(sweet);
    expect(shop.sweets.length).toBe(13);
  });
});
