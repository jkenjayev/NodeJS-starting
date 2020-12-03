const fs = require('fs');
// using fs module's readdir() method
    // First synchronous version
    const file = fs.readdirSync('./')
    // console.log(files);

    // Second asynchronous version
    const files = fs.readdir('./', function(err, files) {
        if(err) 
           ; // console.log(err);
        else
           ; // console.log(files);
    })
