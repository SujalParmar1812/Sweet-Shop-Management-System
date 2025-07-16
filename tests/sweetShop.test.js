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

  test('should delete a sweet by id', () => {
    const originalLength = shop.getAllSweets().length;
    const sweetToDelete = shop.getAllSweets()[shop.getAllSweets().length-1];
    shop.deleteSweet(sweetToDelete.id);

    const afterDelete = shop.getAllSweets();
    expect(afterDelete.length).toBe(originalLength-1);
    expect(afterDelete.find(s=>s.id===sweetToDelete.id)).toBeUndefined();
  })
  
  
});
