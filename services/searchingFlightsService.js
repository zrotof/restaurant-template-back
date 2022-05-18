// Ce service permet de retourner un tableau d'objets d'aéroport correspondant à la recherche de l'utilisateur

//Import du module des config
const {baseSearchF} = require('../config/dotEnvConfig');

//import des utilities des vols
const AirUtilitiesService = require("./airUtilitiesService");

var airUtilitiesServices = new AirUtilitiesService();

//Import du module query string, il me permettra de formater les paramètres /query sous forme
//foo=bar&baz=tor
const querystring = require('querystring');

//import du module https d'axios qui permettra d'effectuer des requêttes
const axios = require('axios');


class SearchingFlightsService {
 
  async testo (httpHeader) {

    var flightsObjectArray = new Array();
    var flights = new Array();
    var dictionnaries = new Array();
    var typePassenger = new Array();
    var toto = new Array();

  
    var ajaxHeaderRequest = "Bearer "+httpHeader.accessToken
    //console.log(ajaxHeaderRequest)
    console.log(ajaxHeaderRequest);
    await axios({
          method:'GET',
          url: "https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=SYD&destinationLocationCode=BKK&departureDate=2021-02-09&adults=1&children=1&infants=1&travelClass=FIRST&nonStop=false&max=10",
          headers :{
            "Authorization": ajaxHeaderRequest
          }
        })
        .then((resp) => {        
          //console.log('response ');

          //console.log("On est dans le then")
          toto = resp.data;
          flights=resp.data.data; 
          dictionnaries=resp.data.dictionaries;


  
          //console.log(flights);
          //On recupère les valeurs trouvée en cas de succès
          flights.forEach(element => {
  
            //The number of passengers
            //console.log(element.travelerPricings.length)

            var itineraries = new Array();
  
            element.itineraries.forEach(el =>{
              var segments= new Array();
              //console.log(el)

              
  
              el.segments.forEach(e =>{
  
  
             // console.log(e)

             //Pour ce bloc de code on va parser le json recupérer pour sélectionner les éléments spécifiques et construire le tableau de retour
                var carrier = e.carrierCode;
                var departure = e.departure.iataCode;
                var arrival = e.arrival.iataCode;
                var cabine ;
              // console.log(dictionnaries.locations[departure].cityCode)
              //console.log(e.aircraft.code);


              var typePassenger = new Array();
                element.travelerPricings.forEach(PASSENGER =>{

                  

                  PASSENGER.fareDetailsBySegment.forEach(passenger => {

                    if(e.id == passenger.segmentId){

                      if(PASSENGER.travelerType == 'ADULT'){ 
                        var adult = new Array();
                        adult.push({

                        'weight': passenger.includedCheckedBags?passenger.includedCheckedBags.weight: '',
                        'weightUnit': passenger.includedCheckedBags?passenger.includedCheckedBags.weightUnit:0,
                        'label': 'ADULT'

                        })

                        typePassenger.push({
                          'adult': adult
                          
                        })
                      }

                      if(PASSENGER.travelerType == 'CHILD'){ 
                        var child = new Array();
                        child.push({

                        'weight': passenger.includedCheckedBags?passenger.includedCheckedBags.weight: '',
                        'weightUnit': passenger.includedCheckedBags?passenger.includedCheckedBags.weightUnit:0,
                        'label': 'CHILD'

                        })

                        typePassenger.push({
                          'child': child
                          
                        })
                      }

                      if(PASSENGER.travelerType == 'HELD_INFANT'){ 
                        var infant = new Array();
                        infant.push({

                        'weight': passenger.includedCheckedBags?passenger.includedCheckedBags.weight: '',
                        'weightUnit': passenger.includedCheckedBags?passenger.includedCheckedBags.weightUnit:0,
                        'label': 'HELD_INFANT'

                        })

                        typePassenger.push({
                        'infant': infant
                        
                      }) 
                      }

                      cabine= passenger.cabin;
                    }

                  })

//                  console.log(typePassenger)
                  })

                  

                                       // console.log(typePassenger);


                  
                                       segments.push({
                                        'cabine': cabine,
                                        'departure': e.departure.iataCode,
                                        'departureCityCode': dictionnaries.locations[departure].cityCode,
                                        'terminalDeparture': e.departure.terminal?e.departure.terminal:"/",
                                        'dateDeparture':e.departure.at,
                                        'dateDepartureParsed': airUtilitiesServices.parseAirDate(e.departure.at),
                                        'arrival': e.arrival.iataCode,
                                        'arrivalCityCode': dictionnaries.locations[arrival].cityCode,
                                        'terminalArrival': e.arrival.terminal?e.arrival.terminal: "/",
                                        'dateArrival':e.arrival.at,
                                        'dateArivalParsed': airUtilitiesServices.parseAirDate(e.arrival.at),
                                        'compagnyCode': e.carrierCode,
                                        'compagnyLabel': dictionnaries.carriers[carrier],
                                        'typePlane': dictionnaries.aircraft[e.aircraft.code],
                                        'duration': airUtilitiesServices.parseAirDuration(e.duration),
                                        'typePassenger': typePassenger
                                      })  
                 //console.log( airUtilitiesServices.parseAirDate(e.departure.at));
  
              })
  
              //console.log(element.price)
              
              itineraries.push({
                "duration":airUtilitiesServices.parseAirDuration(el.duration),
                "segments":segments
                        });
              
            })
  
            
              flightsObjectArray.push({
                'itineraries':itineraries,
                "price": element.price.total,
                "currency": element.price.currency,
                "passengers": "0"+element.travelerPricings.length

              })
             // console.log(flightsObjectArray)
  
           // console.log(element.itineraries['segments']);
  
  
          });
          //console.log('response ' +airports);
  
      })
      .catch((error) => {
  
            console.log ('ça a cuit ' +error);
      });
  
      console.log("inside")
      return flightsObjectArray; 
  
  }






async retrieveFlights (httpHeader , queries) {

  var flightsObjectArray = new Array();
  var flights = new Array();
  var dictionnaries = new Array();


  //console.log('http '+httpHeader);
  //console.log('queries: '+queries);
  //console.log(queries);


  let pieceOfUrl = querystring.stringify(queries);
  var flightsURL = baseSearchF+"?"+pieceOfUrl;
  //console.log(flightsURL);

  var ajaxHeaderRequest = "Bearer "+httpHeader.accessToken
   //console.log(ajaxHeaderRequest)

  
  await axios({
        method:'GET',
        url: flightsURL,
        headers :{
          "Authorization": ajaxHeaderRequest
        }
  
      })
      .then((resp) => {        
        //console.log('response ');

        flights=resp.data.data; 
        dictionnaries=resp.data.dictionaries



        //console.log(flights);
        //On recupère les valeurs trouvée en cas de succès
        flights.forEach(element => {

          //The number of passengers
          //console.log(element.travelerPricings.length)

          var itineraries = new Array();

          element.itineraries.forEach(el =>{
            var segments= new Array();
            //console.log(el)

            

            el.segments.forEach(e =>{


           // console.log(e)

           //Pour ce bloc de code on va parser le json recupérer pour sélectionner les éléments spécifiques et construire le tableau de retour
              var carrier = e.carrierCode;
              var departure = e.departure.iataCode;
              var arrival = e.arrival.iataCode;
             // console.log(dictionnaries.locations[departure].cityCode)


              segments.push({
                
                'departure': e.departure.iataCode,
                'departureCityCode': dictionnaries.locations[departure].cityCode,
                'terminalDeparture': e.departure.terminal,
                'dateDeparture':e.departure.at,
                'dateDepartureParsed': airUtilitiesServices.parseAirDate(e.departure.at),
                'arrival': e.arrival.iataCode,
                'arrivalCityCode': dictionnaries.locations[arrival].cityCode,
                'terminalArrival': e.arrival.terminal,
                'dateArrival':e.arrival.at,
                'dateArrivalParsed': airUtilitiesServices.parseAirDate(e.arrival.at),
                'carrierCode': e.carrierCode,
                'carrierLabel': dictionnaries.carriers[carrier],
                'duration': airUtilitiesServices.parseAirDuration(e.duration)
              })

              //console.log( airUtilitiesServices.parseAirDate(e.departure.at));

            })

            //console.log(element.price)
            
            itineraries.push({
              "duration":airUtilitiesServices.parseAirDuration(el.duration),
              "segments":segments
                      });
            })

            flightsObjectArray.push({
              'itineraries':itineraries,
              "price": element.price.total,
              "currency": element.price.currency,
              "passengers": "0"+element.travelerPricings.length
            })
           // console.log(flightsObjectArray)

         // console.log(element.itineraries['segments']);


        });
        //console.log('response ' +airports);

    })
    .catch((error) => {

          console.log ('ça a cuit ' +error);
    });

    //console.log("inside")
    return flightsObjectArray; 

}

  }
  
  



module.exports = SearchingFlightsService;
