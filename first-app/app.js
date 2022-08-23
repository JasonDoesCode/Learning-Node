// general practice is to use const instead of var
// using var may be overridden
const logger = require('./logger')

// When require returns an object, we specfiy the function in use
logger.log('Hello!')

// When require returns a single function we can directly use the variable
logger('Hello')
