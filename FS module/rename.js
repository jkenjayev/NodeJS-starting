const fs = require('fs');
fs.rename('index.js', 'rename.js', (err) => {
    if(err) 
        throw err;
    console.log('Warn! the file is renamed.');
})