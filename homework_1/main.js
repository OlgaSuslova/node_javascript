// Напишите HTTP сервер и реализуйте два обработчика, где:
// — По URL “/” будет возвращаться страница, на которой есть гиперссылка на вторую страницу по ссылке “/about”
// — А по URL “/about” будет возвращаться страница, на которой есть гиперссылка на первую страницу “/”
// — Также реализуйте обработку несуществующих роутов (404).
// — * На каждой странице реализуйте счетчик просмотров. Значение счетчика должно увеличиваться на единицу каждый раз, когда загружается страница.

const http = require('http')

let counterIndex = 0;
let counterAboutUs = 0;
let counterError = 0;

const server = http.createServer((req, res) => {
    console.log('запрос получен');

    if (req.url === '/') {

        counterIndex++;
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=UTF-8'
        });
        res.end(`<h1>Главная страница</h1><a href="http://localhost:3000/about">About</a><p>Количество посещений: ${counterIndex}</p>`)
    } else if (req.url === '/about') {  
        counterAboutUs++;
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=UTF-8'
        });
        res.end(`<h1>О нас</h1> <a href="http://localhost:3000">Index</a> <p>Количество посещений: ${counterAboutUs}</p>`)
    } else {
        counterError++;
        res.writeHead(404, {            
            'Content-Type': 'text/html; charset=UTF-8'
        });
        res.end(`<h1>Страница не найдена</h1> <p>Количество посещений: ${counterError}</p>`)
    }
    
})

const port = 3000;
server.listen(port, () => {
    console.log(`сервер запущен на порту ${port}`);
})