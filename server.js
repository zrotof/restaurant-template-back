const {port,baseSearchF} = require('./config/dotEnvConfig.js');

//Import du framework express
const express = require('express');
const app = express();

//import de la classe qui permet de générer l'http header 
const HttpHeader = require("./services/createHttpHeaderRequestService");

const bodyParser = require('body-parser')

//Import cors module 
var cors = require('cors');
const { required } = require('nodemon/lib/config');
//Appel du module de configuration

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req,res)=>{ 

    
        res.send("Le monde chico et tout ce qu'il ya dedans");

  
});

//calling to the mail route
app.use('/mail', require('./routes/mail/mailRoutes'));
  
//calling to the tour route
app.use('/tourisme', require('./routes/tourism/tourRoutes'));
  



//On appelle la route des aéroports en lui donnant le httpheader existant
app.use('/airports', function (req,res,next) { 
 
  new HttpHeader().initialiseHeader().then( resp =>{
    req.body =resp;
     next();
  })
  },require('./routes/airportsSearchRoutes'));


//On appelle la route des aéroports en lui donnant le httpheader existant
app.use('/flights', function (req,res,next) { 
 
  
new HttpHeader().initialiseHeader().then( resp =>{
  req.body =resp;
   next();
})


  },require('./routes/flightsSearchRoutes'));


app.listen(port, () =>console.log(`Your port is ${port} ...`));


