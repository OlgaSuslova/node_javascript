const fs = require('fs');
fs.appendFile(__filename, '\nconsole.log("hello world");', (err) => {
    if (err) {
        console.error(err);
    }
    console.log("the fie was saved");
})
console.log("hello world");