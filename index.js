const express = require('express');
const app = express();
var port = 3009;
var bodyParser = require('body-parser');
const mongodb = require('mongodb');

var MongoClient = require('mongodb').MongoClient
    , assert = require('assert');

 var url = 'mongodb://localhost:27017/concession';


app.use(bodyParser.urlencoded({extended: true}));
 
app.get('/', function(req,res){
    res.render('index');
});
   


app.use(express.static('static'));

// utilisation du moteur de rendu ejs
app.set('view engine', 'ejs');

app.listen(port, function(){
    console.log('the port is on')
});
