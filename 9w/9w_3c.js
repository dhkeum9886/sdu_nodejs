const PORT = 55555;
const fs = require('fs');
const bodyParser = require('body-parser');
const express = require('express');
const session = require('express-session');
const multipart = require('connect-multiparty');
const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(multipart({uploadDir:__dirname+'/multipart'}));

app.use(session({
    secret:'secret key',
    resave:false,
    saveUninitialized:true,
    cookie:{
        maxAge:60*100
    }
}));

app.listen(PORT, () =>{
    console.log(`listening on ${PORT}`);
});

const users = {};

app.get('/user', ((req, res) => {
    res.send(users);
}))

app.post('/user', ((req, res) => {
    const body = req.body;

    if (!body.id)   {return res.send('id not found')}
    if (!body.name)   {return res.send('name not found')}
    if (!body.region)   {return res.send('region not found')}

    const id = body.id;
    const name = body.name;
    const region = body.region;

    users[id] = {
        name: name,
        region: region
    }

    res.send(users[id]);
}))

app.get('/user/:id', ((req, res) => {
    const id = req.params.id;
    res.send(users[id]);
}))

app.put('/user/:id', ((req, res) => {
    const id = req.params.id;
    if (req.body.name){
        users[id].name = req.body.name;
    }
    if (req.body.region){
        users[id].region = req.body.region;
    }
    res.send(users[id]);
}))

app.delete('/user/:id', ((req, res) => {
    const id = req.params.id;
    delete users[id];

    res.send('deleted ' + id);
}))