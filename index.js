const express = require('express');
const app = express();
var port = 3009;
var bodyParser = require('body-parser');
const mongodb = require('mongodb');

var MongoClient = require('mongodb').MongoClient
    , assert = require('assert');

 var url = 'mongodb://localhost:27017/concession';


app.use(bodyParser.urlencoded({extended: true}));

// route page accueil  
app.get('/', function(req,res){
    get_voitures(function(voitures){
        //console.log(hotels);
        res.render('index', {
            voitures : voitures
        });
    
});
});

  // fonction pour retourner la liste des voitures 
function get_voitures(cb){
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("concession");
        dbo.collection("voitures").find({}).toArray(function (err, result) {
            if (err) throw err;
      
            cb(result);
            db.close();
        });
    });

}
//fonction pour ajouter des données à la liste des voitures 



app.use(express.static('static'));

// utilisation du moteur de rendu ejs
app.set('view engine', 'ejs');

app.listen(port, function(){
    console.log('the port is on')
});
