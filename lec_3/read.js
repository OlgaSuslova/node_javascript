const fs = require('fs');
fs.readFile(__filename, 'utf-8', (err, data) => {
    if (err) {
        console.error(err);
    } else {
        console.log(data);
    }
})