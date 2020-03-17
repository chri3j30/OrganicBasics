var express = require('express');
var router = express.Router();

const fetch = require('node-fetch');

const apiUrl = 'https://api.github.com/repos/Shopify/shopify_api/languages';
router.get('/', (req, res) => {
    fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.redirect('/error');
        });
});

module.exports = router;
