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

  test('should search sweets by name', () => {
    const sweetName = shop.searchSweet({"name":"Dark Chocolate Fudge"});
    expect(sweetName.length).toBeGreaterThan(0);
    expect(sweetName[0].name).toBe("Dark Chocolate Fudge");
  })

  test('should search sweets by category', () => {
    const sweetCategory = shop.searchSweet({"category":"Chocolate"});
    expect(sweetCategory.length).toBeGreaterThan(0);
    sweetCategory.forEach(sweet => expect(sweet.category).toBe('Chocolate'));
  })

  test('should search sweets by max-price', () => {
    const sweetsInRange = shop.searchSweet({"maxPrice":100});
    expect(sweetsInRange.every(sweet=>sweet.price<=100)).toBe(true);
  })

  test('purchaseSweet() should decrease quantity of sweet by given amount', () => {
    const originalQuantity = shop.getAllSweets()[0].quantity;
    shop.purchaseSweet(2, 2);
    const updatedQuantity = shop.getAllSweets().find(s => s.id === 2).quantity;
    expect(updatedQuantity).toBe(originalQuantity - 2);
  });

  test('purchaseSweet() should throw error if quantity exceeds available stock', () => {
    const sweet = shop.getAllSweets().find(s => s.id === 4);
    expect(() => shop.purchaseSweet(4, sweet.quantity + 10)).toThrow();
  });

  test('restockSweet() should update quantity of a sweet', () => {
    const sweetBefore = shop.getAllSweets().find(s => s.id === 3);
    const newQuantity = sweetBefore.quantity + 4;

    shop.restockSweet(3, newQuantity);
    const sweetAfter = shop.getAllSweets().find(s => s.id === 3);

    expect(sweetAfter.quantity).toBe(newQuantity);
  });

  
});
