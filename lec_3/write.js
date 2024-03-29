const fs = require('fs');
fs.writeFile('./text.txt', 'console.log("hello world")', (err) => {
    if (err) {
        console.error(err);
    }
    console.log("the fie was saved");
})