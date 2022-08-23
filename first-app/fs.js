const fs = require('fs')

// File System uses both sync and async functions
// Should use async functions as intended for non-blocking - sync functions exist for simplicity

// Using sync as an example
// Returns all the files and folders in the current folder
// const files = fs.readdirSync('./')
// console.log(files)

// All async functions take a callback function as their second parameter
fs.readdir('$', (err, files) => {
    if (err) console.log('Error', err)
    else console.log('Result', files)
})