const express = require('express');
const router = express.Router();

const fetch = require('node-fetch');

const apiUrl = 'https://api.github.com/repos/Shopify/shopify_api/languages';

router.get('/', (req, res) => {
    fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(404);
        });
});

module.exports = router;
