
const fs = require('fs');
const path = './src/sweets.json'



class SweetShop {
    constructor() {
        this.sweets = JSON.parse(fs.readFileSync(path,'utf-8')); 
    }

    addSweet(sweet) {
        const exists = this.sweets.some(item => item.id === sweet.id);
        if (exists) {
            throw new Error(`Sweet with ID ${sweet.id} already exists.`);
        }
        this.sweets.push(sweet);
        this.saveToFile();
    }

    getAllSweets(){
        const data = fs.readFileSync(path, 'utf-8');
        return JSON.parse(data);
    }

    deleteSweet(id){
        this.sweets = this.sweets.filter(s=>s.id!==id);
        this.saveToFile();
    }

   searchSweet({ name, category, maxPrice }) {
    return this.sweets.filter(sweet => {
        if (name && !sweet.name.toLowerCase().includes(name.toLowerCase())) return false;
        if (category && sweet.category !== category) return false;
        if (maxPrice !== undefined && sweet.price > maxPrice) return false;
        return true;
    });
    }
    //refactor
    purchaseSweet(id, quantity=1) {
        this.updateSweetQuantity(id,(sweet)=>{
            if(sweet.quantity<quantity) throw new Error("Insufficient stock");
            sweet.quantity-=quantity;
        })
    }

    updateSweetQuantity(id,callBack){
        const sweet  = this.sweets.find(s=>s.id===id);
        if(!sweet) throw new Error("sweet not found");
        callBack(sweet);
        this.saveToFile();
        
    }

    
  saveToFile() {
    fs.writeFileSync(path, JSON.stringify(this.sweets, null, 2));
  }
    
}

module.exports = SweetShop;
