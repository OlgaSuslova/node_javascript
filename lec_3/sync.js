const fs = require('fs');

try {
    const result = fs.readFileSync(__filename, 'utf-8');//  читаем файл
    console.log(result);//выводим в консоль содержимое файла
} catch (error) {
    console.error(error); // выводим ошибку
}

try {
    fs.appendFileSync(__filename, "console.log('hello')");
    console.log('the file was saved');
} catch (error) {
    console.error(error);
}console.log('hello')