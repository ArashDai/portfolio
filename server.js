var express = require('express');
var path = require('path');
var port = process.env.PORT || 8080;
var app = express();
var nodemailer = require('nodemailer');
var account = require('./secrets/secret')
var bodyParser = require('body-parser')

app.use( bodyParser.json() );       

app.use(bodyParser.urlencoded({     
  extended: true
})); 

app.use(express.static(__dirname));

app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'index.html'))
});

app.post('/contact',(req,res)=>{
    var transporter = nodemailer.createTransport(`smtps://${account.Username}:${account.Password}@smtp.zoho.com`);
    
    var content = 
        `From ${req.body.name} ${req.body.phone} ${req.body.email}

        ${req.body.message}`

    var mailOptions = {
        from: account.Username,
        to: account.Reciever,
        subject: 'Portfolio Contact Request✔',
        text: content,
       // html: content // html body
    };

    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            res.send(error)
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
    });
});


app.listen(port);
console.log('Server started',port)