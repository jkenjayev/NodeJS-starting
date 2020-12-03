const fs = require('fs');
const data = 'Salom';

fs.writeFile('message.txt',data,(err) => {
    if(err) throw err;
    console.log('The file is saved!');
});