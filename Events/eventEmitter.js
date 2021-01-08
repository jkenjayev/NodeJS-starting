const Logger = require('./log');
const logger = new Logger();


logger.on("messageLogged", (arg) => {
  console.log("Event emitter is called", arg);
}
           
logger('Hello');
