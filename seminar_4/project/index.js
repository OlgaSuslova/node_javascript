const express = require('express');
const fs = require('fs');
const path = require('path');
const Joi = require('joi');

const app = express();
app.use(express.json());

const userDbPath = path.join(__dirname, './users.json'); //путь к файлу

let uniqieId = 1;

//validation
const userSchema = Joi.object({
    firstName: Joi.string().min(2).required(),
    secondName: Joi.string().min(2).required(),
    age: Joi.number().min(0).required(),
    city: Joi.string().min(3) 
})

// вывод пользователей
app.get('/users', (req, res) => {
    const users = JSON.parse(fs.readFileSync(userDbPath));
    res.send({users})
});

// вывод пользователя по id
app.get('/users/:id', (req, res) => {
    const users = JSON.parse(fs.readFileSync(userDbPath));
    const foundUser = users.find((user) => {
        return user.id === +req.params.id;
    })

    if (foundUser) {
        res.send({user: foundUser});
    } else {
        res.status(404);
        res.send({foundUser: null});
    }
});

// добавление нового пользователя
app.post('/users', (req, res) => {
    const resultValidation = userSchema.validate(req.body);

    if (resultValidation.error) {
        return res.status(404).send({error: resultValidation.error.details})
    } 

    uniqieId += 1;
    const users = JSON.parse(fs.readFileSync(userDbPath));
    users.push({id: uniqieId, ...req.body });
    fs.writeFileSync(userDbPath, JSON.stringify(users));
    res.send({id: uniqieId})
});

// обновление данных по пользователю
app.put('/users/:id', (req, res) => {
    const resultValidation = userSchema.validate(req.body);

    if (resultValidation.error) {
        return res.status(404).send({error: resultValidation.error.details})
    } 

    const users = JSON.parse(fs.readFileSync(userDbPath));
    const foundUser = users.find((user) => {
        return user.id === +req.params.id;
    });
    
    if (foundUser) {
        foundUser.firstName = req.body.firstName;
        foundUser.lastName = req.body.lastName;
        foundUser.age = req.body.age;
        foundUser.city = req.body.city;
        users.push({id: uniqieId, ...req.body });
    } else {
        res.send({user: null});
    }   

    res.send({ user: foundUser })
});

// удаление пользователя
app.delete('/users/:id', (req, res) => {
    const users = JSON.parse(fs.readFileSync(userDbPath));
    const foundUserIndex = users.findIndex((user) => {
        return user.id === +req.params.id;
    });
    users.splice(foundUserIndex, 1);
    fs.writeFileSync(userDbPath, JSON.stringify(users));
    res.send({ id: req.params.id })
});

app.listen(3000)