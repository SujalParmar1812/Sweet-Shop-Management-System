const express = require('express');
const path = require('path');
const SweetShop = require('./src/sweetShop');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'frontend')));

app.get('/api/sweets', (req, res) => {
    const shop = new SweetShop();
    res.json(shop.getAllSweets());
});

app.post('/api/sweets', (req, res) => {
    const shop = new SweetShop();
    shop.addSweet(req.body);
    res.status(201).json({ message: 'Sweet added successfully' });
});

app.delete('/api/sweets/:id', (req, res) => {
    try {
        const shop = new SweetShop();
        shop.deleteSweet(parseInt(req.params.id));
        res.json({message: 'Sweet deleted'});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
});

app.get('/api/sweets/search', (req, res) => {
    const shop = new SweetShop();
    const { name, category, maxPrice } = req.query;
    const sweets = shop.searchSweet({
        name, category, maxPrice: maxPrice ? Number(maxPrice) : undefined
    });
    res.json(sweets);
});

app.put('/api/sweets/purchase/:id', (req, res) => {
    try {
        const shop = new SweetShop();
        const quantity = req.body.quantity || 1;
        shop.purchaseSweet(parseInt(req.params.id), quantity);
        res.json({message: 'Sweet purchased'});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
});

app.put('/api/sweets/restock/:id', (req, res) => {
    try {
        const shop = new SweetShop();
        shop.restockSweet(parseInt(req.params.id), req.body.quantity);
        res.json({message: 'Sweet restocked'});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

app.listen(port, () => console.log(`Server started on http://localhost:${port}`));

