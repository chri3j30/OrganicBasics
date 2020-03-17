var express = require('express');
var router = express.Router();

const fetch = require('node-fetch');

const apiUrl = 'https://api.github.com/orgs/Shopify/repos?direction=desc';

router.get('/', (req, res) => {
    fetch(apiUrl)
        .then(res => res.json())
        .then(data => {

            var mappedRepositories;

            mappedRepositories = data.map(x => {
                return {
                    name: x.name,
                    url: x.url
                };
            });

            res.send(mappedRepositories);
        })
        .catch(err => {
            res.redirect('/error');
        });
});

module.exports = router;