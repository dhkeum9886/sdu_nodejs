const PORT = 80;
const fs = require('fs');
const bodyParser = require('body-parser')
const express = require('express');
const app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.get('/display', (request, response) =>{
    fs.readFile('./display.html', (error, data)=>{
        response.send(data.toString());
    });
});

app.get('/image', (request, response) =>{
    fs.readFile('./080020.jpg', function(error, file){
        if (error){
            console.log(error);
            response.end('<h1>'+error+'</h1>');
        };

        response.writeHead(200,{'Content-Type':'image/jpeg'});
        response.end(file);
    });
});

app.get('/mp3', (request, response) =>{
    fs.readFile('./example_MP3.mp3', function(error, file){
        if (error){
            console.log(error);
            response.end('<h1>'+error+'</h1>');
        };

        response.writeHead(200,{'Content-Type':'audio/mp3'});
        response.end(file);
    });
});

app.get('/video', (request, response) =>{
    fs.readFile('./sample-mp4-file.mp4', function(error, file){
        if (error){
            console.log(error);
            response.end('<h1>'+error+'</h1>');
        };

        response.writeHead(200,{'Content-Type':'video/mp4'});
        response.end(file);
    });
});


app.get('/get', (request, response) =>{
    fs.readFile('./login_get.html', (error, data)=>{
        response.send(data.toString());
    });
});
app.post('/get', (request, response) =>{
    response.redirect('/display');
});

app.get('/post', (request, response) =>{
    fs.readFile('./login_post.html', (error, data)=>{
        response.send(data.toString());
    });
});
app.post('/post', (request, response) =>{
    response.redirect('/display');
});


app.listen(PORT, () =>{
    console.log(`listening on ${PORT}`);
});
