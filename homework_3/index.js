const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

const countPage = path.join(__dirname, 'count.json');
const counter = JSON.parse(fs.readFileSync(countPage, 'utf-8'));


app.get('/', (req, res) => {
    counter.index++;
    fs.writeFileSync(countPage, JSON.stringify(counter, null, 2));
    res.send(`<h1>Корневая страница</h1><p>Просмотров: ${counter.index}</p><a href="./about">About</a>`)
})

app.get('/about', (req, res) => {
    counter.about++;    
    fs.writeFileSync(countPage, JSON.stringify(counter, null, 2));
    res.send(`<h1>Страница About</h1><p>Просмотров: ${counter.about}</p><a href="./">Index</a>`);
})

app.listen(3000);

