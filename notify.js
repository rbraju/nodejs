
const fs = require('fs');

// 2nd argument from the command line. Ex: node <notify.js> <filename>
let filePath = process.argv[2];

if(filePath) {
    console.log('Listening for updates on ' + filePath + '...');
    fs.watch(filePath, { encoding : 'buffer' }, (eventType, filename) => {
        if (filename) {
            console.log(filePath + ' updated on ' + new Date());
        }
    });
} else {
    console.error("File required.")
}
