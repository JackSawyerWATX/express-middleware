const express = require('express');
const app = express();
const port = 5000;

const products = [
    { name: 'Sneakers', price: 99.99 },
    { name: 'T-Shirt', price: 19.99 }
];

app.get('/api/products', (req, res) => {
    res.json(products);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
