
//import de l'access_token
const Token = require ('./createValidAccessToken');
var tokenInfo = new Token();

//Appel du module de configuration du client amadeus
const amadeus = require('../config/amadeusClientConfig');



class CreateHttpHeaderRequestService{

//Cette fonction permet de renvoyer l'entête qui nous servira de nous authentifier pour les appels l'API d'Amadeus
//La valeur de retour sera utilisée dans un htp headers "Authorized"
    async  initialiseHeader() {

        if(!tokenInfo.accessToken){
            await tokenInfo.bearerToken(amadeus)
            .catch((err) =>{
                return  err;
            });
        }

        else{
            if(Date.now() > tokenInfo.expiresAt  ){
                await tokenInfo.bearerToken(amadeus)
            .catch((err) =>{
                return  err;
            });
            }
            
        }

        return tokenInfo;
    }
}
module.exports = CreateHttpHeaderRequestService ;