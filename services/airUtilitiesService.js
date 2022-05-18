/**
 * Ce service contient tous les traitements qui ne sont pas directement liés au métier
 * Il gère tout ce qui est vol
*/

//Import du module des config
const {baseSearchA} = require('../config/dotEnvConfig');

//import du module https d'axios qui permettra d'effectuer des requêttes
const axios = require('axios');

class AirUtilitiesService {
  

  //fonction qui permet de formater la durée des vols
  //Elle sera renvoyée sous forme YYYY-MM-dd at XXhXXmXXs
  parseAirDuration( duration ){

    //console.log(duration)
    var n = duration.replace(/D|H|M/g,":").replace(/P|T|S/g,"").split(":");

    for(var i = 0; i< n.length; i++){

      if(n[i].length< 1){
        n[i]="00";
      }
      else
        if(n[i].length == 1){
          n[i]="0"+n[i];
        }
      //console.log("n"+i+ " "+n[i])
    }

    for(var j = 0; j< n.length; j++){

      if(j == 0){
        n[j]=n[j]+"h";
      }
      if(j == 1){
        n[j]=n[j]+"m";

      }
      if(j == 2){
        n[j]=n[j]+"s";

      }
     
    }

    //console.log(n)
    return n.join('');
  }

  //Paser la date
  //Elle sera renvoyer sous la forme YYYY-MM-dd at XXhXXmXXs
  parseAirDate(date){
    var n = date.split("T");

    n[1]= this.parseAirDuration(n[1]);
    return n.join(' à ')
  }


}

module.exports = AirUtilitiesService;
