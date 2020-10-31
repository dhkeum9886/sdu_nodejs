const PORT = 55555;
const fs = require('fs');
const bodyParser = require('body-parser')
const express = require('express');
const app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.get('/', (request, response) =>{
    response.redirect('/login');
});

app.get('/login', (request, response) =>{
    fs.readFile('./login_post.html', (error, data)=>{
        response.send(data.toString());
    });
});

app.post('/login', (request, response) =>{
    console.log(request.body);
    let login = request.body.login;
    let password = request.body.password;

    console.log(login, password);
    fs.readFile('./login_post.html', (error, data)=>{
        response.send(data.toString());
    });

    if (login!=='' && password !== ''){
        response.send('<h1>login success</h1>');
    } else {
        response.redirect('/login');
    }
});


app.listen(PORT, () =>{
    console.log(`listening on ${PORT}`);
});
