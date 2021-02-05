if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config({path:'.env'});
}

const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const bodyParser = require('body-parser')
//const url = 'mongodb+srv://user:5TvLUImh8JtcYG5G@cluster0.b5wat.mongodb.net/getesolution?retryWrites=true&w=majority'

// const indexRouter = require('./routes/index')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/assets'));
// app.set('layout', 'layouts/layouts')
// app.use(expressLayouts)
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false}) )

// const mongoose = require('mongoose')
// mongoose.connect( url , { useNewUrlParser: true });
// const db = mongoose.connection
// db.on('error', error => console.error(error))
// db.once('open', () => console.log('Connected to mongoose'))

app.post('/sign_up', function(req,res){ 
    var name = req.body.name; 
    var email =req.body.email; 
    var subject = req.body.subject; 
    var message =req.body.message; 
    var date = new Date();
    var data = { 
        "name": name, 
        "email":email, 
        "subject":subject, 
        "message":message,
        "date": date 
    } 
db.collection('details').insertOne(data,function(err, collection){ 
        if (err) throw err; 
        console.log("Record inserted Successfully"); 
              
    }); 
          
    return res.send("Your message has been sent. Thank you!")
})

app.get('/', function(req, res) {
    res.render('index', { layout: 'specific-layout' });
});
// app.get('/services', function(req, res) {
//     res.render('services/services');
// });
app.get('/contact', function(req, res) {
    res.render('contact');
});
// app.get('/', function(req, res) {
//     res.render('index');
//});

// app.use('/', indexRouter) 
app.listen(process.env.PORT || 3001)