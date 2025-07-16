
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
        //refactor
         const data = fs.readFileSync(path, 'utf-8');
        return JSON.parse(data);
    }
    
  saveToFile() {
    fs.writeFileSync(path, JSON.stringify(this.sweets, null, 2));
  }
    
}

module.exports = SweetShop;
