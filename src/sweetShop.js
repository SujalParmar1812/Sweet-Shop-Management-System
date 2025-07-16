
const fs = require('fs');
const path = './src/sweets.json'



class SweetShop {
    constructor() {
        this.sweets = JSON.parse(fs.readFileSync(path,'utf-8')); 
    }

    addSweet(sweet) {
        this.sweets.push(sweet);
        this.saveToFile();
    }
    
  saveToFile() {
    fs.writeFileSync(path, JSON.stringify(this.sweets, null, 2));
  }
    
}

module.exports = SweetShop;
