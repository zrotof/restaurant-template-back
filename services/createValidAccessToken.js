//import query-string, this help to fomat the post format to retrieve the access token
const qs = require('query-string');
//import du module https qui permettra d'effectuer des requêttes
const axios = require('axios');
//Import des variables du fichier .env
const {apiKey,apiSecret} = require('../config/dotEnvConfig.js');

//import du client amadeus
const client = require ('../config/amadeusClientConfig');


 //On importe le module events qui nous permettra de gérer les évènements
 //Concrètement on va configurer nos évènements de manière à ce qu'elles se déclenchent suivant certaines valeurs
const EventEmitter = require('events');
const { Console } = require('console');

// The number of seconds before the token expires, when
// we will already try to refresh it
const TOKEN_BUFFER = 10;

/**
  * A helper library to create and maintain the OAuth2 AccessTokens between
  * requests. Keeps track of the expiry time and automatically tries to fetch
  * a new token if needed.
  *
  * @property {string} accessToken the cached current access token (bearer)
  * @property {number} expiresAt the aproximate time this token expires at
  * @protected
  */
class CreateValidAccessToken{

  constructor(){
      this.accessToken;
      this.expiresAt;
  }





  // PROTECTED

  /**
   * Fetches or returns a cached bearer token. Used by the Client to get a
   * token before making an API call.
   *
   * @param  {Client} client the Amadeus Client to make an API call with
   * @return {Promise.<Response,ResponseError>} a Bluebird Promise
   * @protected
   */
  bearerToken(client) {
    let emitter = new EventEmitter();
    let promise = this.promise(emitter);
    this.emitOrLoadAccessToken(client, emitter);
    return promise;
  }

  // PRIVATE

  /**
   * Builds a Bluebird promise to be returned to the API user
   *
   * @param  {type} emitter the EventEmitter used to notify the Promise of
   * @return {Promise} a Bluebird promise
   * @private
   */
  promise(emitter) {
    
    return new Promise((resolve, reject)=>{
      emitter.on('resolve', response => {
        resolve(response);
      });
      emitter.on('reject', error => {
        reject(error);
      });
    })
  }


  /**
   * Checks if the token needs a refresh, if not emits the cached token,
   * otherwise tries to load a new access token
   *
   * @param  {Client} client the Amadeus Client to make an API call with
   * @param  {type} emitter the EventEmitter used to emit the token
   * @private
   */
  emitOrLoadAccessToken(client, emitter) {
    if (this.needsLoadOrRefresh()) { this.loadAccessToken(client, emitter); }
    else { emitter.emit('resolve', [this.accessToken,this.expiresAt]); }
  }

  /**
   * Checks if the token needs a refresh or first load
   *
   * @return {boolean} wether the token needs a refresh
   * @private
   */
  needsLoadOrRefresh() {
    if (!this.accessToken) { 
      //console.log("on est dans le cas où ça n'existe pas .");
      return true; }
    else if ((Date.now() + TOKEN_BUFFER) > this.expiresAt) { 
      //console.log("On est dans la partie du temps");
      return true; }
    else { return false; }
  }

  

  /**
   * Loads the access token using the client, emits the token when it's loaded
   *
   * @param  {Client} client the Amadeus Client to make an API call with
   * @param  {type} emitter the EventEmitter used to emit the token
   * @private
   */
  loadAccessToken(client, emitter) {


    const body = {
        'grant_type' : 'client_credentials',
        client_id : client.client.clientId,
        client_secret : client.client.clientSecret
    };


    const options ={
        headers :{
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };

    axios({
        method:'post',
        url: 'https://test.api.amadeus.com/v1/security/oauth2/token',
        data: qs.stringify(body),
        options
    }).then((response) => {
      this.storeAccessToken(response);
      this.emitOrLoadAccessToken(client, emitter);
    }).catch((error) => {

      emitter.emit('reject', error);
      console.log('ça a cuit ' +error);
    });
  }


/**
   * Stores a loaded access token, calculating the expiry date
   *
   * @param  {Response} response the response object received from the client
   * @private
   */
  storeAccessToken(response) {
    
    this.accessToken = response.data['access_token'];
    this.expiresAt = Date.now() + (response.data['expires_in'] * 1000);
  }




}

module.exports = CreateValidAccessToken;
