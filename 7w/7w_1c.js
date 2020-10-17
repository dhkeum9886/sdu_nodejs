const PORT = 55555;
const fs = require('fs');
const http = require('http');
const url = require('url');
const ejs = require('ejs');

const server = http.createServer(function(request, response){
    fs.readFile('./ejsPage.ejs', 'utf-8', function(error, data){
        if (error)
            console.log(err);
        console.log(data);

        const output = ejs.render(data, {
            name:'platans111',
            description:'hello ejs with nodejs'
        })
        response.writeHead(200,
            {
                'Content-Type':'text/html'
            });
        response.end(output);
    });
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