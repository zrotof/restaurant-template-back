const { evEmail } = require('../config/dotEnvConfig');

const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = require('../config/mailConfig');


class MailService{

    //Sending a mail from the contact form on client side
    sendContactMail(civility, firstname, lastname, email, phone, preference, subject, text, cb){

        let finalSubject;
        
        let messageBody;
        const process = "Contact";

        finalSubject = process + " | " + subject ;
        
        let preferences = "NB: je souhaite être recontacté par" + preference

        //Parse body of the mail
        if(phone.length == 0){
            messageBody = text + "\n\n" + preference + "\n\n" + civility + " " + firstname + " " + lastname +"\n" +email;
        }
        else{
            messageBody = text + "\n\n" + preferences + "\n\n" + civility + " " + firstname + " " + lastname +"\n" + email +"\n" + phone;
        }

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
                console.log("error");

                cb(error,null)
            } else {
                //if mail is sent successfully send Sent successfully as response
                cb(null,info)
                console.log("message send succesfully");

            }
        });

    }

    //Sending a mail from the flight form on client side
    sendFlightMail(way, cabine, departure, arrival, dateDep, dateRet, adult, child, infant, lastname, email, phone, message, cb){

        let recap ;
        let personalData ;
        let finalSubject = "Billet d'avion" ;
        
        //Parse body of the mail
        if(phone.length == 0){
            personalData = lastname +"\n" + email;
        }
        else{
            personalData = lastname +"\n" + email +"\n" + phone;
        }

        if(dateRet.length == 0 ){

            recap = "Récap" + "\n\n" + 
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

            recap = "Récap" + "\n\n" + 
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

    //Sending a mail from the dhl form on client side
    sendDhlMail(civility, firstname, lastname, email, phone, country, weight, contains, dimensions, cb) { 
    
        let info ;
        let personalData ;
        let finalSubject = "DHL" ;
        
        //Parse body of the mail
        if(phone.length == 0){
            personalData = civility + " " + firstname + " " + lastname +"\n" +email;
        }
        else{
            personalData = civility + " " + firstname + " " + lastname +"\n" +email +"\n" + phone;;
        }

        if(dimensions.length == 0 ){

            info = "Informations d'expédition" + "\n\n" + 
                    "Destination : "+country + "\n" + 
                    "Poids : " + weight + "\n" +
                    "Contenu : " + contains + "\n"
        }
        else{

            info = "Informations d'expédition" + "\n\n" + 
                    "Destination : "+country + "\n" + 
                    "Poids : " + weight + "\n" +
                    "Contenu : " + contains + "\n" +
                    "dimensions du collis : " + dimensions + "\n"
            
        }

        let messageBody = info + "\n\n" + personalData;

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

    //Sending a mail from the car form on client side
    sendCarMail(reason, town, capacity, driver, dateDeb, dateFin, heureDeb, heureFin, extras, civility, firstname, lastname, email, phone, cb) { 
    
        let finalSubject = "Location de voiture" ;
        
        let personalData = civility + " " + firstname + " " + lastname +"\n" +email +"\n" + phone ;
        let extrasList;

        if(extras.length > 0){
            extras.forEach(element => {
                extrasList.push(element+", ")
            });
        }

        let info = "Information de réservation \n\n"
                    + "Motif de location : " +reason + "\n" 
                    + "Ville : " + town + "\n"
                    + "Nombre de places : " + capacity + "\m"
                    + "Loaction : " + driver + "\n"
                    + "Date début : " + dateDeb + " " + heureDeb + "\n"
                    + "Date fin : " + dateFin + " " + heureFin + "\n"
                    + "Extras : " + extrasList


        let messageBody = info + "\n\n" + personalData;

        var transporter = nodemailer.createTransport(mailGun(auth)); 


        const mailOptions = {
            from: email,
            to: evEmail,
            subject: finalSubject,
            text: messageBody
        };

        console.log(mailOptions)


        transporter.sendMail(mailOptions, function (error, info){
            if (error) {
                cb(error,null)
            } else {
                cb(null,info)
            }
        });

    }

    //Sending a mail from the Apartment form on client side
    sendApartMail(type, town, dateDeb, dateFin, extras, civility, firstname, lastname, email, phone,cb){

        let personalData = civility + " " + firstname + " " + lastname +"\n" +email +"\n" + phone ;
        let finalSubject = "Appartement meublés" ;

        let extrasList = '';

        if(extras.length > 0){
            extras.forEach(element => {
                extrasList += element+", ";
            });
        }

        let info = "Information de réservation \n\n"
                    + "Type d'appartement : " +type + "\n" 
                    + "Ville : " + town + "\n"
                    + "Date début : " + dateDeb + "\n"
                    + "Date fin : " + dateFin + "\n"
                    + "Extras : " + extrasList

        let messageBody = info + "\n\n" + personalData;


        var transporter = nodemailer.createTransport(mailGun(auth)); 


        const mailOptions = {
            from: email,
            to: evEmail,
            subject: finalSubject,
            text: messageBody
        };

        console.log(mailOptions)

        transporter.sendMail(mailOptions, function (error, info){
            if (error) {
                cb(error,null)
            } else {
                cb(null,info)
            }
        });
    }

    //Sending a mail from the hostel form on client side
    sendHostelMail(nbr, town, dateDeb, dateFin, extras, civility, firstname, lastname, email, phone,hotels,cb){

        let info
        let personalData = civility + " " + firstname + " " + lastname +"\n" +email +"\n" + phone ;
        let finalSubject = "Hébergement hôtel" ;

        let extrasList = '';

        if(extras.length > 0){
            extras.forEach(element => {
                extrasList += element+", ";
            });
        }

        if(hotels.length == 0){
            info = "Information de réservation \n\n"
            + "Nombre de chambre(s) : " +nbr + "\n" 
            + "Ville : " + town + "\n"
            + "Date début : " + dateDeb + "\n"
            + "Date fin : " + dateFin + "\n"
            + "Extras : " + extrasList
        }
        else{
            info = "Information de réservation \n\n"
            + "Nombre de chambre(s) : " +nbr + "\n" 
                    + "Ville : " + town + "\n"
                    + "Date début : " + dateDeb + "\n"
                    + "Date fin : " + dateFin + "\n"
                    + "Extras : " + extrasList + "\n"
                    + "Hotel(s) favoris : " + hotels
        }

        
        let messageBody = info + "\n\n" + personalData;


        var transporter = nodemailer.createTransport(mailGun(auth)); 


        const mailOptions = {
            from: email,
            to: evEmail,
            subject: finalSubject,
            text: messageBody
        };

        transporter.sendMail(mailOptions, function (err, info){
            
            if (err) {
                console.log("true")

                console.log(err)
                cb(err,null)
            } else {
                console.log("true")
                console.log(info)
                cb(null,info)
            }
        });
    }

    

}

module.exports = MailService ;