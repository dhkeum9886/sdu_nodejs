const PORT = 55555;
const fs = require('fs');
const http = require('http');
const server = http.createServer(function(request, response){
    console.log('createServer');

    // default response
    response.writeHead(200,
        {
            'Content-Type':'text/html'
        }
    );
    response.end('<h1>hello world</h1>');

    // // redirect
    // response.writeHead(302,
    //     {
    //         'Location':'http://www.google.com'
    //     }
    // );
    // response.end();

    // //text
    // const date = new Date();
    // date.setDate(date.getDate() + 7);
    // response.writeHead(200,
    //     {
    //         'Content-Type':'text/html',
    //         'Set-Cookie':[
    //             'breakfast=toast;Expires='+date.toUTCString(),
    //             'lunch=chicken',
    //             'dinner=nothing'
    //         ],
    //     }
    // );
    // response.end('<h1>hello world</h1>');

    // // image
    // fs.readFile('./080020.jpg', function(error, file){
    //     if (error){
    //         console.log(error);
    //         response.writeHead(500,{'Content-Type':'text/html'});
    //         response.end('<h1>'+error+'</h1>');
    //     };
    //
    //     response.writeHead(200,{'Content-Type':'image/jpeg'});
    //     response.end(file);
    // });

    // // html
    // fs.readFile('./test.html', function(error, file){
    //     if (error){
    //         console.log(error);
    //         response.writeHead(500,{'Content-Type':'text/html'});
    //         response.end('<h1>'+error+'</h1>');
    //     };
    //
    //     response.writeHead(200,{'Content-Type':'text/html'});
    //     response.end(file);
    // });


    // // mp3
    // fs.readFile('./example_MP3.mp3', function(error, file){
    //     if (error){
    //         console.log(error);
    //         response.writeHead(500,{'Content-Type':'text/html'});
    //         response.end('<h1>'+error+'</h1>');
    //     };
    //
    //     response.writeHead(200,{'Content-Type':'audio/mp3'});
    //     response.end(file);
    // });

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