// Single word assumes a built in module
const path = require('path')

var pathObj = path.parse(__filename)

console.log(pathObj)