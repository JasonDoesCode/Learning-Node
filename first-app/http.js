const http = require('http')

// Has access to EventEmitter
// const server = http.createServer()

// Typical way to create a server using callback
// However, instead of using this HTTP module, most applications just use express
const server = http.createServer((request, response) => {

    // Can handle various routes of user access here
    if (request.url === '/') {
        response.write('Hello World')
        response.end()
    }

    if (request.url === '/api/courses') {
        response.write(JSON.stringify([1, 2, 3])) //can return information based on a URL
        response.end()
    }
})

// the event name for connection to the server is defined as 'connection'
// Not a common way to handle connections
// server.on('connection', (socket) => {
//     console.log('New Connection Established')
// })

server.listen(3000)

console.log('Listening on port 3000...')


