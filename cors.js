const cors = require('cors');

const whiteList =['http://localhost:4200', 'https://www.elites-voyages.com', 'https://elites-voyages.com'];

var corsOptionDelegate  = (req, callback) =>{

    var corsOptions;

    if(whiteList.indexOf(req.header('Origin')) !== -1){
        corsOptions = { origin: true};
    }

    else{
        corsOptions = { origin: false};
    }
    
    callback(null, corsOptions);

}

exports.corsWithOptions = cors(corsOptionDelegate);