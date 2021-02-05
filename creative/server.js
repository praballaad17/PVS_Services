if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config({path:'.env'});
}

const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const bodyParser = require('body-parser')
const url = 'mongodb+srv://user:3u4Rb3ZK9t5k3lil@cluster0.w5t2i.mongodb.net/PVS?retryWrites=true&w=majority'


app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/assets'));
// app.set('layout', 'layouts/layouts')
// app.use(expressLayouts)
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false}) )

const mongoose = require('mongoose')
mongoose.connect( url , { useNewUrlParser: true });
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to mongoose'))

app.post('/sign_up', function(req,res){ 
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var companyName = req.body.companyName;
    var jobTitle = req.body.jobTitle; 
    var number =req.body.number;
    var email =req.body.email; 
    var message =req.body.message; 
    var date = new Date();
    var data = { 
        "firstName": firstName,
        "lastName":lastName,
        "companyName":companyName,
        "jobTitle":jobTitle,
        "email":email, 
        "number":number, 
        "message":message,
        "date": date 
    } 
db.collection('customers').insertOne(data,function(err, collection){ 
        if (err) throw err; 
        console.log("Record inserted Successfully"); 
              
    }); 
          
    return res.send("Your message has been sent. Thank you!")
})

app.get('/', function(req, res) {
    res.render('index', { layout: 'specific-layout' });
});
app.get('/services', function(req, res) {
    res.render('services');
});
app.get('/contact', function(req, res) {
    res.render('contact');
});
app.get('/about', function(req, res) {
    res.render('about');
});

app.listen(process.env.PORT || 3001)