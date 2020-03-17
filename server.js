const express = require('express');

const app = express();
var router = express.Router();
const port = 3000;
var commits = require('./endpoints/commits.js');
var languages = require('./endpoints/languages.js');
var repositories = require('./endpoints/repositories.js')
//const fetch = require('node-fetch');
// const apiUrl = 'https://api.github.com/repos/Shopify/shopify_api/commits?since=2017-01-01T19:46:35+0000&until=2017-12-31T19:46:35+0000'


app.use(express.urlencoded({extended: true}));
app.use(express.json());

router.get('/', (req, res) => {
    res.send('ok');
});

app.listen(port, (err) => {
    if(err) { console.log(err); };
    console.log('Listening on port ' + port);
});

app.use('/commits', commits);
app.use('/languages', languages);
app.use('/repositories', repositories)