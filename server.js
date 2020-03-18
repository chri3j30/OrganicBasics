const express = require('express');
const app = express();
const router = express.Router();
const port = 3000;

const commits = require('./endpoints/commits.js');
const languages = require('./endpoints/languages.js');
const repositories = require('./endpoints/repositories.js')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

router.get('/', (req, res) => {
    res.send('ok');
});

app.listen(port, (err) => {
    if (err) { console.log(err); };
    console.log('Listening on port ' + port);
});

