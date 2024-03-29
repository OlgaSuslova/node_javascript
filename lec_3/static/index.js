const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('static'));

//корневая страница
app.get('/', (req, res) => {
    res.sendFile('static/index.html')
});

const port = 3000;

app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
})