const PORT = 80;
const fs = require('fs');
const bodyParser = require('body-parser')
const express = require('express');
const mysql = require('mysql');
const ejs = require('ejs');
const app = express();

app.use(bodyParser.urlencoded({extended:false}));

let client = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    database:'company',
    password: 'kdh2crom',
    connectTimeout : 10000
});

app.get('/', (request, response) =>{
    fs.readFile('./list.html', 'utf-8',  (error, data)=>{
        client.query('select * from products', (err, result)=>{
            response.send(ejs.render(data,{
                data: result
            }));
        });
    });
});

app.get('/delete/:id', (request, response) =>{
    client.query('delete from products where id=?' , request.params.id, ()=>{
        response.redirect('/');
    })
})
// app.post('/delete/:id', (request, response) =>{
//     client.query('delete from products where id=?' , request.params.id, ()=>{
//         response.redirect('/');
//     })
// })
app.get('/insert', (request, response) =>{
    fs.readFile('./insert.html', (error, data)=>{
        response.send(data.toString());
    });
})

app.post('/insert', (request, response) =>{
    let body = request.body;
    client.query('insert into products (name, modelnumber, series) values (?, ?, ?)',
        [body.name, body.modelnumber, body.series], (error, result) =>{
            if (error){
                console.log(error);
                return ;
            }
            response.redirect('/');
    })
})

app.get('/edit/:id', (request, response) =>{
    fs.readFile('./edit.html', 'utf-8',  (error, data)=>{
        client.query('select * from products where id=?' , request.params.id, (err, result)=>{
            console.log(result);
            response.send(ejs.render(data,{
                data: result[0]
            }));
        });
    });
})

app.post('/edit/:id', (request, response) =>{
    let body = request.body;
    console.log(body);
    console.log([body.name, body.modelnumber, body.series, body.id]);
    client.query('update products set name=?, modelnumber=?, series=? where id=?',
        [body.name, body.modelnumber, body.series, body.id], (error, result) =>{
            console.log(result);
            if (error){
                console.log(error);
                return ;
            }
        response.redirect('/');
    });
})

app.listen(PORT, () =>{
    console.log(`listening on ${PORT}`);
});
