const {port} = require('./config/dotEnvConfig.js');

//Import du framework express
const express = require('express');
const app = express();

const bodyParser = require('body-parser')

//Importing cors
const cors = require("./cors");

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req,res)=>{ 
        res.send("Le monde chico et tout ce qu'il ya dedans");
});

//calling to the mail route
app.use('/mail', require('./routes/mail/mailRoutes'));
  
//calling to the tour route
app.use('/tourisme', require('./routes/tourism/tourRoutes'));

app.listen(port, '0.0.0.0', ()=>console.log(`Listening on port : ${port} ...`));

