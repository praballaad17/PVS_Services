const express = require('express')
const app = express()
//const expressLayouts = require('express-ejs-layouts')
const bodyParser = require('body-parser')
const uri = 'mongodb+srv://user:3u4Rb3ZK9t5k3lil@cluster0.w5t2i.mongodb.net/PVS?retryWrites=true&w=majority'

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false}) )

const mongoose = require('mongoose')
mongoose.connect(uri, {useNewUrlParser: true});
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to mongoose'))

app.post('/sign_up', function(req,res){ 
    var name = req.body.name; 
    var email =req.body.email; 
    var subject = req.body.subject; 
    var message =req.body.message; 
  
    var data = { 
        "name": name, 
        "email":email, 
        "subject":subject, 
        "message":message 
    } 
db.collection('details').insertOne(data,function(err, collection){ 
        if (err) throw err; 
        console.log("Record inserted Successfully"); 
              
    }); 
          
    return res.send("Your message has been sent. Thank you!")
})

app.post('/subscribe', function(req,res){  
    var email =req.body.email;  
    var data = {
        "email":email
        } 
db.collection('subscribers').insertOne(data,function(err, collection){ 
        if (err) throw err; 
        console.log("Record inserted Successfully");       
    });
    return res.send("Your email has been sent. Thank you!")
})

app.listen(process.env.PORT || 3000)