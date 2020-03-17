const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('ok');
});

app.listen(port, (err) => {
    if(err) { console.log(err); };
    console.log('Listening on port ' + port);
});