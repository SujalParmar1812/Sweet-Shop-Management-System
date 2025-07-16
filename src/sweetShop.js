
const fs = require('fs');
const path = './src/sweets.json'



class SweetShop {
    constructor() {
        //getting sweets from sweets.js
        this.sweets = JSON.parse(fs.readFileSync(path,'utf-8')); 
    }

    //adding sweet to the sweet shop
    addSweet(sweet) {
        const exists = this.sweets.some(item => item.id === sweet.id);
        if (exists) {
            throw new Error(`Sweet with ID ${sweet.id} already exists.`);
        }
        this.sweets.push(sweet);
        this.saveToFile();
    }

    //displays available sweets in shop
    getAllSweets(){
        const data = fs.readFileSync(path, 'utf-8');
        return JSON.parse(data);
    }

    //delete a particular sweet from the shop
    deleteSweet(id){
        this.sweets = this.sweets.filter(s=>s.id!==id);
        this.saveToFile();
    }

    //search sweet available in shop by name, category, price
   searchSweet({ name, category, maxPrice }) {
    return this.sweets.filter(sweet => {
        if (name && !sweet.name.toLowerCase().includes(name.toLowerCase())) return false;
        if (category && !sweet.category.toLowerCase().includes(category.toLowerCase())) return false;
        if (maxPrice !== undefined && sweet.price > maxPrice) return false;
        return true;
    });
    }

    //purchasing sweets from the shop
    purchaseSweet(id, quantity=1) {
        this.updateSweetQuantity(id,(sweet)=>{
            if(sweet.quantity<quantity) throw new Error("Insufficient stock");
            sweet.quantity-=quantity;
        })
    }

    //updating the sweet-quantity according to changes
    updateSweetQuantity(id,callBack){
        const sweet  = this.sweets.find(s=>s.id===id);
        if(!sweet) throw new Error("sweet not found");
        callBack(sweet);
        this.saveToFile();
        
    }
    
    //restocking the existing sweets
    restockSweet(id, quantity) {
        if (quantity < 0) throw new Error("Quantity cannot be negative");

        this.updateSweetQuantity(id, (sweet) => {
            sweet.quantity = quantity;
        });
    }


    //saving sweet data
    saveToFile() {
        fs.writeFileSync(path, JSON.stringify(this.sweets, null, 2));
  }
    
}

module.exports = SweetShop;
