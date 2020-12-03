// required node's core module path 
const path = require('path');

// token path module's parse method and given __filename  to this parse method as a value
const pathObj = path.parse(__filename);

// logging on the console. the pathObj
console.log(pathObj);   
