'use strict'
const express = require('express');
const http = require('http');
const app = express();
const socketio = require('socket.io');
const fs = require('fs');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res, next) {
    fs.readFile('./htmlpage.html', (error, data)=>{
        res.send(data.toString());
    });
});

const server = http.createServer(app);
const io = require('socket.io')(server);
io.on('connection', socket => {
    socket.on('rint', (data) => {
        console.log('client send data:', data)
        // socket.emit('smart', data);
        socket.broadcast.emit('smart', data); // broadcast
    });
    socket.on('disconnect', (data) => {
        console.log('client disconnet')
    });
});
server.listen(3000, ()=>{
    console.log('listening on 3000');
});
