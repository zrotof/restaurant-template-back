const { restaurantEmail, mailgunSenderEmail } = require('../config/dotEnvConfig');

const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = require('../config/mailConfig');


class MailService{

    //Sending a mail from the contact form on client side
    sendContactMail(name, email, phone, message, cb){
        
        
        let subject = 'Contact';

        //Parse body of the mail
        let messageBody = message + "\n\n" + name + "\n" + email +"\n" + phone;
        

        var transporter = nodemailer.createTransport(mailGun(auth)); 

        const mailOptions = {
            from: mailgunSenderEmail,
            to: restaurantEmail,
            subject: subject,
            text: messageBody
        };

        transporter.sendMail(mailOptions, function (error, info){
            if (error) {
                //if error occurs send error as response to client
                cb(error,null)
            } else {
                //if mail is sent successfully send Sent successfully as response
                cb(null,info)
            }
        });
    }

    //Sending a mail from the flight form on client side
    sendFlightMail(way, cabine, departure, arrival, dateDep, dateRet, adult, child, infant, lastname, email, phone, message, cb){

        let recap ;
        let finalSubject = "Vols | Billet d'avion";        
        let personalData = lastname +"\n" + email +"\n" + phone;
        

        if(dateRet.length == 0 ){

            recap = "Information de réservation" + "\n\n" + 
                    "Trajet : "+way + "\n" + 
                    "Cabine : " + cabine + "\n" +
                    "Départ : " + departure + "\n" +
                    "Arrivée : " + arrival + "\n" +
                    "Date départ : " + dateDep + "\n" +
                    "Passager adulte : " + adult + "\n" +
                    "Passager enfant : " + child + "\n" +
                    "Passager bébé : " + infant + "\n"
        }
        else{

            recap = "Information de réservation" + "\n\n" + 
                    "Trajet : "+way + "\n" + 
                    "Cabine : " + cabine + "\n" +
                    "Départ : " + departure + "\n" +
                    "Arrivée : " + arrival + "\n" +
                    "Date départ : " + dateDep + "\n" +
                    "Date retour : " + dateRet + "\n" +
                    "Passager adulte : " + adult + "\n" +
                    "Passager enfant : " + child + "\n" +
                    "Passager bébé : " + infant + "\n"
        }


        let messageBody = message + "\n\n" + recap + "\n\n" + personalData;

        var transporter = nodemailer.createTransport(mailGun(auth)); 


        const mailOptions = {
            from: email,
            to: evEmail,
            subject: finalSubject,
            text: messageBody
        };


        transporter.sendMail(mailOptions, function (error, info){
            if (error) {
                cb(error,null)
            } else {
                cb(null,info)
            }
        });

    }

    addToNewsletter(email, cb){

        let finalSubject = "Newsletter | Ajout à la newsletter" ;


        let messageBody = "Bonjour, merci de m'ajouter à la newsletter pour profiter de vos promotions et vos nouvelles offres ";


        var transporter = nodemailer.createTransport(mailGun(auth)); 
    
    
            const mailOptions = {
                from: email,
                to: evEmail,
                subject: finalSubject,
                text: messageBody
            };
    
 


                transporter.sendMail(mailOptions, function (error, info){
                    if (error) {
                        //if error occurs send error as response to client
        
                        cb(error,null)
                    } else {
                        //if mail is sent successfully send Sent successfully as response
                        cb(null,info)
        
                    }
                });



    }

}

module.exports = MailService ;