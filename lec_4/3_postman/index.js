const express = require('express');

const app = express();

app.post('/', (req, res) => {
    res.send('<h1>Hello post!</h1>')
});

app.listen(3000);
