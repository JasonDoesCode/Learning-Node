const EventEmitter = require('events')
const emitter = new EventEmitter()

//Register a listener
emitter.on('messageLogged', (e) => {
    console.log('Listener Called', e)
})

//Raise an event
//Can add an 'Event Argument' object to pass additional parameters
emitter.emit('messageLogged', { id: 1, url: 'http://' })


//Raise: logging (data: message)
emitter.on('logging', (e) => {
    console.log('Logging Listener Called', e)
})

emitter.emit('logging', { data: 'Event Processing' })