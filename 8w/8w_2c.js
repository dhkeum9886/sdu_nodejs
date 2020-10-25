const PORT = 55555;
const fs = require('fs');
const http = require('http');
const url = require('url');
const ejs = require('ejs');

const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/static'));

app.get('/index',  (request, response, next)=>{
    response.send(`<h1>index page</h1>`);
})

// app.get('*',  (request, response, next)=>{
//     response.status(404).send(`<h1>404 error page</h1>`);
// })

app.get('/page/:id',  (request, response, next)=>{
    let name = request.params.id;
    response.send(`<h1>${name}</h1>`);
})

app.get('/a',  (request, response, next)=>{
    response.send('<a herf="/b">go to b</a>');
})

app.get('/b',  (request, response, next)=>{
    response.send('<a herf="/a">go to a</a>');
})

// 미들웨어 테스트
// app.use((request, response, next) =>{
//     request.a=52;
//     response.b=273;
//     console.log('첫번째 미들웨어');
//     next();
// });
// app.use((request, response, next) =>{
//     console.log(request.a);
//     console.log('두번째 미들웨어');
//     next();
// });
// app.use((request, response, next) =>{
//     console.log(response.b);
//     console.log('세번째 미들웨어');
//     next();
// });
// app.use((request, response, next) =>{
//     console.log('네번째 미들웨어');
//     response.send(`<h1>미들웨어 테스트22</h1>`);
//     // next();
// });



app.listen(PORT, () =>{
    console.log('listening on ' + PORT);
});
