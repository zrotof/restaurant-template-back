const cors = require('cors');

const whiteList =['http://localhost:4200', 'http://api.restaurant.sm-digitalizer.fr', ''];

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