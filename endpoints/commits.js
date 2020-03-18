const express = require('express');
const router = express.Router();

const fetch = require('node-fetch');

const apiUrl = 'https://api.github.com/repos/Shopify/shopify_api/commits?since=2017-01-01T19:46:35+0000&until=2017-12-31T19:46:35+0000'

router.get('/', (req, res) => {
    fetch(apiUrl)
        .then(res => res.json())
        .then(data => {

            var mappedCommits;

            mappedCommits = data.map(x => {
                return {
                    author: x.commit.author.name,
                    date: x.commit.author.date,
                    message: x.commit.message
                }
            });

            res.send(mappedCommits);
        })
        .catch(err => {
            res.status(404);
        });
});

module.exports = router;


