const PORT = 55555;
const fs = require('fs');
const http = require('http');
const url = require('url');
const ejs = require('ejs');

const express = require('express');
const app = express();

// app.use((request, response) =>{
//
//     // response.writeHead(200, {
//     //     'Content-Type':'text/html'
//     // })
//     // response.end('<h1> express test</h1>');
//
//     // response.send('<h1> express test</h1>');
//     // response.send({
//     //     name : 'test',
//     //     id : 'idid'
//     // });
//     // response.status(404).send({
//     //     name : 'test',
//     //     id : 'idid'
//     // });
//
//     // let agent = request.header('User-Agent');
//     // console.log("#### " + JSON.stringify(request.headers));
//     // console.log("#### " + agent);
//     // // response.sendStatus(200);
//     //
//     // if (agent.toLocaleLowerCase().match(/chrome/)){
//     //     response.send('<h1> express chrome</h1>');
//     // } else {
//     //     response.send('<h1> express express</h1>');
//     // }
//
//     response.send(request.query);
// });

app.use('/b/:page', (request, response) =>{
    response.send(`<h1>${request.params.page}페이지입니다.</h1>`);
});


app.listen(PORT, () =>{
    console.log('listening on ' + PORT);
});
