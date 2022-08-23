var url = 'https://mylogger.io/log'

function log(message) {
    //send an https request
    console.log(message)
}

// Exporting a function to make it avaliable publicly
// module.exports.log = log

// instead of exporting an object, when just exporting a function we can do
module.exports = log

// Exporting a var to make it public
// names do not have to match
// module.exports.endPoint = url