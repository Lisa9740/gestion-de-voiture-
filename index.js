const express = require('express');
const app = express();
var port = 3008;
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
app.post('/ajoutdonnees',function(req,res){
    
//Ajout d'une nouvelle voiture


    var marque = req.body.marque;
    var img = req.body.img;
    var puissance = req.body.puissance;
    var motorisation = req.body.motorisation;
    var prix = req.body.prix;
    var couleur = req.body.couleur;
    var nbporte = req.body.nbporte;
    var nbplace = req.body.nbplace;
    
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("concession");
        dbo.collection("voitures").insertOne({marque:marque, img:img, puissance:puissance, motorisation:motorisation, prix:prix, couleur:couleur, nbporte:nbporte, nbplace:nbplace},function (err, result) {
            
            if (err){
                res.send("error");
            }else {
                res.send("success");
            }
        }),
            
            db.close();
        });

});





app.use(express.static('static'));

// utilisation du moteur de rendu ejs
app.set('view engine', 'ejs');

app.listen(port, function(){
    console.log('the port is on')
});
