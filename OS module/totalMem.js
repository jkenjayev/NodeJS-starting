const os =  require('os');
// Take total memory
const totalMem = os.totalmem();
// Take free memory
const freeMem = os.freemem()

// count the used memory
const usedMem = Math.floor((totalMem - freeMem)/ (1024 * 1024));
console.log(usedMem);