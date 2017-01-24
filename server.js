const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
const nodemailer = require('nodemailer');



app.use(express.static(__dirname));

app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'index.html'))
});

app.post('/contact',(req,res)=>{
    console.log(req)
});


app.listen(port);
console.log('Server started',port)