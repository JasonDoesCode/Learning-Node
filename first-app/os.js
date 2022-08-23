const os = require('os')

var totalMem = os.totalmem()
var freeMem = os.freemem()

console.log('Memory in Use: ' + (totalMem - freeMem))
console.log(`Total Memory: ${totalMem}`)
console.log(`Free Memory: ${freeMem}`)

