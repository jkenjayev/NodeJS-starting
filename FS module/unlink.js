const fs = require('fs');
    fs.unlink('path/file.txt', (err) => {
        if(err) 
            throw err;
        console.log('path/file.txt is deleted');
    })