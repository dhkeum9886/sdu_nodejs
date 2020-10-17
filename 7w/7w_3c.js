const PORT = 55555;
const http = require('http');
const url = require('url');
const ejs = require('ejs');
const jade = require('jade');

const server = http.createServer(function(request, response){
    // response.writeHead(200,
    //     {
    //         'Content-Type':'text/html'
    //     });
    // response.end('<h1> test 123 </h1>');

    if (request.url == '/'){
        response.write('<!DOCTYPE html>');
        response.write('<html lang="en">');
        response.write('<head></head>');
        response.write('<body>');
        response.write('<h1>hello world</h1>');
        response.write('</body>');
        response.write('</html>');
        response.end();
    } else {
        error.error.error();
    }
});

// server.listen(55555, ()=>{
server.listen(PORT, function(){
    console.log('listening on ' + PORT);
});

// server.on('close', ()=>{
server.on('close', function(){
    console.log('close');
});

// server.on('request', ()=>{
server.on('request', function(){
    console.log('request');
});

server.on('error', function(){
    console.log('error');
});

// server.on('connection', ()=>{
server.on('connection', function(){
    console.log('connection');
});