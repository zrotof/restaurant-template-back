const dotenv = require('dotenv');
dotenv.config();


module.exports ={
    port : process.env.PORT,
    apiKey : process.env.API_KEY,
    apiSecret : process.env.API_SECRET,
    baseSearchF : process.env.BASE_SEARCHF,
    baseSearchA: process.env.BASE_SEARCHA,
    mailgunApiKey: process.env.MAILGUN_API_KEY,
    mailgunDomain: process.env.MAILGUN_DOMAIN,
    evEmail: process.env.ELITES_VOYAGES_EMAIL
}