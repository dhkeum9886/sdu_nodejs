const PORT = 55555;
const fs = require('fs');
const http = require('http');
const url = require('url');

const server = http.createServer(function(request, response){
    console.log(request.url);


    // // 쿠키 추출, 설정
    // if (request.headers.cookie) {
    //     // 쿠키 추출
    //     let cookie = request.headers.cookie.split(';').map(function (data) {
    //         let element = data.split('=');
    //
    //         return {
    //             key: element[0],
    //             value: element[1]
    //         }
    //     });
    //     response.end('<h1>' + JSON.stringify(cookie) + '</h1>');
    // } else {
    //     // 쿠키 설정
    //     let cookie = request.headers.cookie;
    //     response.writeHead(200,
    //         {
    //             'Content-Type':'text/html',
    //             'Set-Cookie':
    //             ['breakfast=; Max-Age:0',
    //             'name=platanas',
    //             'region=daejeon'
    //             ]
    //         });
    //     response.end('<h1>' + JSON.stringify(cookie) + '</h1>');
    // }

    // // 쿠키 설정
    // let cookie = request.headers.cookie;
    // response.writeHead(200,
    //     {
    //         'Content-Type':'text/html',
    //         'Set-Cookie':
    //         ['breakfast=; Max-Age:0',
    //         'name=platanas',
    //         'region=daejeon'
    //         ]
    //     });
    // response.end('<h1>' + JSON.stringify(cookie) + '</h1>');

    // // get 요청이 오면 페이지 연결.
    // if ('GET' == request.method){
    //     console.log("GET");
    //     fs.readFile('./test.html', function(error, file){
    //         if (error){
    //             console.log(error);
    //             response.writeHead(500,{'Content-Type':'text/html'});
    //             response.end('<h1>'+error+'</h1>');
    //         };
    //         response.writeHead(200,{'Content-Type':'text/html'});
    //         response.end(file);
    //     });
    // }
    // // 연결된 페이지에서 post 가 오면 동작 수행
    // else if ('POST' == request.method){
    //     console.log("POST");
    //     request.on('data', function(data){
    //         console.log(String(data));
    //         response.writeHead(200,{'Content-Type':'text/html'});
    //         response.end('<h1>' + JSON.stringify(String(data)) + '</h1>');
    //     });
    // } else {
    //     response.writeHead(404);
    //     response.end();
    // }

    // // url parse
    // let query = url.parse(request.url, true).query;
    // console.log(query);
    // response.writeHead(200,{'Content-Type':'text/html'});
    // response.end('<h1>' + JSON.stringify(query) + '</h1>');

    // // method 에 따른 동작 분리
    // if ('GET' == request.method){
    //     console.log("GET");
    //     response.end();
    // } else if ('POST' == request.method){
    //     console.log("POST");
    //     response.end();
    // } else {
    //     response.writeHead(404);
    //     response.end();
    // }

    // // url 에 따른 동작 분리
    // if ('/a' == request.url){
    //     fs.readFile('./222.jpg', function(error, file){
    //         if (error){
    //             console.log(error);
    //             response.writeHead(500,{'Content-Type':'text/html'});
    //             response.end('<h1>'+error+'</h1>');
    //         };
    //
    //         response.writeHead(200,{'Content-Type':'image/jpeg'});
    //         response.end(file);
    //     });
    // }
    // else if ('/b' == request.url){
    //     fs.readFile('./example_MP3.mp3', function(error, file){
    //         if (error){
    //             console.log(error);
    //             response.writeHead(500,{'Content-Type':'text/html'});
    //             response.end('<h1>'+error+'</h1>');
    //         };
    //
    //         response.writeHead(200,{'Content-Type':'audio/mp3'});
    //         response.end(file);
    //     });
    // } else {
    //     response.writeHead(404);
    //     response.end();
    // }
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