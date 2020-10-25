const PORT = 55555;
const fs = require('fs');
const http = require('http');
const url = require('url');
const ejs = require('ejs');
const cookieParser = require('cookie-parser');

const express = require('express');
const app = express();

app.use(cookieParser());

// 쿠키 파서
app.get('/getcookie', (request, response) => {
   response.send(request.cookies);
});
app.get('/setcookie', (request, response) => {
    response.cookie('string', 'cookie');
    response.cookie('json', {
        name:'nametest',
        id:'ididid'
    });
    response.redirect('/getcookie');
});


// // morgan , log middleware
// const morgan = require('morgan');
// // app.use(morgan('combined'));
// app.use(morgan('common'));
// // app.use(morgan('dev'));
// // app.use(morgan('short'));
// // app.use(morgan('tiny'));
// // app.use(morgan(':method + :date'));  // custom token setting
// app.use( (resquest, response) =>{
//     console.log('morgan test');
//     response.send(`<h1>morgan test</h1>`);
// })


app.listen(PORT, () =>{
    console.log('listening on ' + PORT);
});
