const { apiKey, apiSecret } = require('./dotEnvConfig');
var Amadeus = require('amadeus');

//Ici on initialise le client avec les paramètres du compte elites voyages disponible sur la plateforme amadeus

const amadeus = new Amadeus({
    clientId: apiKey,
    clientSecret: apiSecret
  });

module.exports = amadeus; 