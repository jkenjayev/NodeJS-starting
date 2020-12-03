const os = require('os');
const freeMem = os.freemem();
console.log(`Kompyuter xotirasidagi bo'sh joy ${freeMem} bayt`);

const username = os.userInfo().username;
console.log(`OS foydalanuvchisi nomi ${username}`);
