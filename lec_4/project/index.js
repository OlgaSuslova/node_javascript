const express = require('express');
const { checkBody, checkParams} = require('./validation/validator');
const { idScheme, articleScheme } = require('./validation/scheme') 
 
const app = express();

let uniqueId = 0;
const articles = [];

app.use(express.json());

//получить все статьи
app.get('/articles', (req, res) => {
    res.send({ articles })
});
// получить конкретную статью
app.get('/articles/:id', checkParams(idScheme), (req, res) => {
    const article = articles.find((article) => article.id === Number(req.params.id));

    if (article) {
        res.send({article})
    } else {
        res.status(404);
        res.send({article: null});
    }
})
// создание статьи
app.post('/articles', checkBody(articleScheme), (req, res) => {
    uniqueId += 1;

    articles.push({
        id: uniqueId,
        ...req.body
    });

    res.send({
        id: uniqueId
    });
});
// обновление статьи
app.put('article/:id', checkParams(idScheme), checkBody(articleScheme), (req, res) => {
    const article = articles.find((article) => article.id === Number(req.params.id))

    if (article) {
        article.title = req.body.title;
        article.content = req.body.content;

        res.send({article})
    } else {
        res.status(404);
        res.send({article: null});
    }
})
// удаление статьи
app.delete('article/:id', checkParams(idScheme), (req, res) => {
    const article = articles.find((article) => article.id === Number(req.params.id))

    if (article) {
        const articleIndex = article.indexOf(article);
        articles.splice(articleIndex, 1);

        res.send({article})
    } else {
        res.status(404);
        res.send({article: null});
    }
})
// обработка несуществующих роутов
app.use((req, res) => {
    res.status(404).send({
        message: 'URL not found'
    })
})

app.listen(3000);
