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
            messageBody = text + "\n\n" + civility + " " + firstname + " " + lastname +"\n" +email;
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

    //Sending a mail from the dhl form on client side
    sendDhlMail(civility, firstname, lastname, email, phone, country, weight, contains, dimensions, cb) { 
    
        let personalData ;
        let finalSubject = "DHL | Dévis expédition colis" ;
        
        //Parse body of the mail
        if(phone.length == 0){
            personalData = civility + " " + firstname + " " + lastname +"\n" +email;
        }
        else{
            personalData = civility + " " + firstname + " " + lastname +"\n" +email +"\n" + phone;;
        }

        
        let info = "Informations d'expédition" + "\n\n" + 
                    "Départ : Cameroun" + "\n" +
                    "Destination : "+country + "\n" + 
                    "Poids : " + weight + "\n" +
                    "Contenu : " + contains + "\n" +
                    "Dimensions du colis : " + dimensions ;
            
        

        let messageBody = "Bonjour," +"\n\n"+ info + "\n\n" + personalData;

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
    
        let finalSubject = "Voiture | Location de voiture" ;
        
        let personalData = civility + " " + firstname + " " + lastname +"\n" +email +"\n" + phone ;
        let extrasList = [];

        if(extras.length > 0){
            extras.forEach(element => {
                extrasList.push(element+" ")
            });
        }

        let info = "Information de location \n\n"
                    + "Motif de location : " +reason + "\n" 
                    + "Ville : " + town + "\n"
                    + "Nombre de places : " + capacity + "\n"
                    + "Location : " + driver + "\n"
                    + "Date début : " + dateDeb + " " + heureDeb + "\n"
                    + "Date fin : " + dateFin + " " + heureFin + "\n"
                    + "Extras : " + extrasList


        let messageBody = "Bonjour, " +"\n\n"+  info + "\n\n" + personalData;

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
        let finalSubject = "Appartement | Location appartement meublé" ;

        let extrasList = [];

        if(extras.length > 0){
            extras.forEach(element => {
                extrasList += element+" ";
            });
        }

        let info = "Information de réservation \n\n"
                    + "Type d'appartement : " +type + "\n" 
                    + "Ville : " + town + "\n"
                    + "Date début : " + dateDeb + "\n"
                    + "Date fin : " + dateFin + "\n"
                    + "Extras : " + extrasList

        let messageBody = "Bonjour, " +"\n\n"+ info + "\n\n" + personalData;


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

    //Sending a mail from the hostel form on client side
    sendHostelMail(nbr, town, dateDeb, dateFin, extras, civility, firstname, lastname, email, phone,hotels,cb){

        let info
        let personalData = civility + " " + firstname + " " + lastname +"\n" +email +"\n" + phone ;
        let finalSubject = "HÖTEL | Hébergement hôtel" ;

        let extrasList = [];

        if(extras.length > 0){
            extras.forEach(element => {
                extrasList += element+" ";
            });
        }

        if(hotels.length == 0){
            info = "Informations de réservation \n\n"
            + "Nombre de chambre(s) : " +nbr + "\n" 
            + "Ville : " + town + "\n"
            + "Date début : " + dateDeb + "\n"
            + "Date fin : " + dateFin + "\n"
            + "Extras : " + extrasList
        }
        else{
            info = "Informations de réservation \n\n"
            + "Nombre de chambre(s) : " +nbr + "\n" 
                    + "Ville : " + town + "\n"
                    + "Date début : " + dateDeb + "\n"
                    + "Date fin : " + dateFin + "\n"
                    + "Extras : " + extrasList + "\n"
                    + "Hotel(s) favoris : " + hotels
        }

        
        let messageBody = "Bonjour, " +"\n\n"+ info + "\n\n" + personalData;


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


    sendCarParisMail(departure, arrival, date, hour, civility, firstname, lastname, email, cb){

        let personalData = civility + " " + firstname + " " + lastname +"\n" +email ;
        let finalSubject = "CAR-PARIS | Location VTC Paris" ;

        let info = "Informations de réservation \n\n"
            + "Adresse de départ " + departure + "\n" 
            + "Adresse d'arrivée " + arrival + "\n"
            + "Date : " + date + "\n"
            + "Heure : " + hour ;



        let messageBody = "Bonjour," + "\n\n" +info + "\n" + personalData;


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

    sendTourMail(circuit,date,logement,civility,lastname,firstname,email,price,nombrePassagerAdult,nombrePassagerEnfant,nombrePassagerBebe, cb){

        let personalData = civility + " " + firstname + " " + lastname +"\n" +email ;
        let finalSubject = "Tourisme | Demande de réservation" ;

        let info = "Informations de réservation : \n\n"
            + "Date : " + date + "\n"
            + "Logement : " +logement+ "\n"
            + "Nombre de personnes total : " + ( nombrePassagerAdult +  nombrePassagerEnfant + nombrePassagerBebe) + "\n"
            + "--->Adulte(s) : " + nombrePassagerAdult + "\n"
            + "--->Enfant(s) : " +nombrePassagerEnfant + "\n"
            + "--->Bébés(s) : " +nombrePassagerBebe ;



        let messageBody = "Bonjour,"+
                        "\nJe souhaite faire une réservation pour le circuit touristique intitulé : " + circuit+
                        "\n\n" +info + 
                        "\n\n" + personalData;


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