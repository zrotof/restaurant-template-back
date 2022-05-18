// Ce fichier java contiendra la route par laquelle on fera la recherch suivant la valeur renseignée par l'utulisateur


var express = require('express');
var router = express.Router();


//import du service de traitement des aéroports

const searchingAirpostService = require('../services/searchingAirportService');
//route par defaut
router.get('/',(req,res)=>{

    res.send('Ok, you are here, now what?');

});


//route qui retourne le tableau des aéroports si résultat il y a
router.get('/:airportName',async (req,res)=>{

    var name=req.params.airportName;
    console.log("name: "+name)
    var airports = await new searchingAirpostService().retrieveAirports(req.body, name);
    //console.log('airport'+airports);
    res.send(airports);
});



module.exports =router;