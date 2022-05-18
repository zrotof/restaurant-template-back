// Ce service permet de retourner un tableau d'objets d'aéroport correspondant à la recherche de l'utilisateur

//Import du module des config
const {baseSearchA} = require('../config/dotEnvConfig');

//import du module https d'axios qui permettra d'effectuer des requêttes
const axios = require('axios');


class SearchingAirportService {
  
  
async retrieveAirports (httpHeader , userInput) {

  //console.log('http '+httpHeader);
  //console.log('user '+userInput);
  var airportsObjectArray = new Array();

  var ajaxHeaderRequest = "Bearer "+httpHeader.accessToken;

  console.log("Airport "+ajaxHeaderRequest);
  await axios({
        method:'GET',
        url: baseSearchA,
        params:{
          "subType":"AIRPORT",
          "keyword":userInput,
          "page[limit]":"10",
          "page[offset]":"0",
          "sort":"analytics.travelers.score",
          "view":"LIGHT"
        },
        headers :{
          "Authorization": ajaxHeaderRequest
        }
  
      })
      .then((resp) => {        
          //console.log('response ');
  
          //On recupère les valeurs trouvée en cas de succès
          var airports = resp.data.data;  
          airports.forEach(element => {
            airportsObjectArray.push({
              "name":element.name,
              "town":element.address['cityName'],
              "iataCode":element.iataCode
            });
          });
          //console.log('response ' +airports);
      })
      .catch((error) => {
            console.log ('ça a cuit ' +error);
      });
      return airportsObjectArray;
  }
}

module.exports = SearchingAirportService;
