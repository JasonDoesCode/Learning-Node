// Node JS does not directly run a file, instead it wraps it in a function
(function (exports, require, module, __filename, __dirname) {
    //all the file code

    // module.exports shorthand
    exports.log = log

    // However it cannot be used to export single functions like so
    // exports = log <- NOT ALLOWED

    // Can access the filename and directory name of the current file
    console.log(__filename)
    console.log(__dirname)
})