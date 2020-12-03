const fs = require('fs');
fs.readFile('./readdir.js', 'utf8',function(err, fileContent) {
    if(err)
        throw err;
        console.log(fileContent);
});