const express = require('express');
const path = require('path');

const app = express();



//корневая страница
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static/index.html'))
});

const port = 3000;

app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
})