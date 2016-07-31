/**
 * Created by Radwan on 7/31/2016.
 */

//Load dependencies and set up the server
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
server.listen(3000);

//Routes setup
app.get('/', function (request, response) {
    response.sendFile(__dirname + '/index.html');
});

//New connection listener
io.on('connection', function (socket) {

    console.log('a connection was made');

    //New message listener
    socket.on('chat.message', function (message) {
        io.emit('chat.message', message);
    })
})