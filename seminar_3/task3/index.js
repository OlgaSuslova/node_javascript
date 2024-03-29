const express = require('express');

const app = express();

app.use(express.static('static'))

app.get('/', (req, res) => {
    res.send(``)
});

app.get('/about', (req, res) => {
    res.send(``)
});

app.listen(3000)