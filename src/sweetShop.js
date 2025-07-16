
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
    }
    
  saveToFile() {
    fs.writeFileSync(path, JSON.stringify(this.sweets, null, 2));
  }
    
}

module.exports = SweetShop;
