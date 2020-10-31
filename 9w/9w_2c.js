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

// express - session
app.use((request, response) => {
    request.session.now = new Date().toUTCString() ;
    response.send(request.session);
})

// file upload
app.get('/', (request, response) => {
    fs.readFile('fileupload.html', (err, data)=>{
        response.send(data.toString());
    })
});

app.post('/', (request, response)=>{
    // console.log(request.body);
    // console.log(request.files);
    // response.redirect('/');
    let comment = request.body.comment;
    let file = request.files.file;
    let filename = file.originalFilename;
    let path = file.path;
    let uploadfilename = __dirname+'/multipart/'+ filename;

    console.log(comment);
    console.log(file);
    console.log(filename);
    console.log(path);
    console.log(uploadfilename);

    fs.rename(path, uploadfilename, (err)=>{
        // fs.unlink(path, (err)=>{}); // 파일 삭제
        response.redirect('/');
    }) ;
})

app.listen(PORT, () =>{
    console.log(`listening on ${PORT}`);
});
