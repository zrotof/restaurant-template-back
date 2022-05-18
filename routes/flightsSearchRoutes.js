const express = require('express');
//import du module router de express
const router = express.Router();

const SearchingFlightsService = require('../services/searchingFlightsService');

router.get('/', async(req, res) =>{

    var flightsOffers = await new SearchingFlightsService().testo(req.body);
   // console.log(flightsOffers);
    res.send(flightsOffers);
    //res.send('Now ou are here, so what?');
});

//This route return flights between two or multiple  cities
//Aller simple
router.get('/ev-am/', async(req, res) =>{

    //console.log(req.query)
    var flightsOffers = await new SearchingFlightsService().retrieveFlights(req.body, req.query)
    res.send(flightsOffers);
});



module.exports =router;
