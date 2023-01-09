const dotenv = require('dotenv');
dotenv.config();


module.exports ={
    port : process.env.PORT || 3000,
    mailgunApiKey: process.env.MAILGUN_API_KEY,
    mailgunDomain: process.env.MAILGUN_DOMAIN,
    mailgunSenderEmail: process.env.MAILGUN_SENDER_EMAIL,
    restaurantEmail: process.env.RESTAURANT_CONTACT_EMAIL
}