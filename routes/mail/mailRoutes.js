const express = require('express');
const router = express.Router();

const MailService = require('../../services/mailService');

router.get('/', async(req, res) =>{

    res.send('mail router')
});

router.post('/contact', async (req,res,next)=>{
        
    const { civility, firstname, lastname, email, phone, preference, subject, message } = req.body;
    await new MailService().sendContactMail(civility, firstname, lastname, email, phone, preference, subject, message, function (error, info) { 

        if(error){
            res.json({message: 'error'})

        }
        else{
            res.json({message: 'success'})
        }
    })
  
})

router.post('/flight',async (req,res,next)=>{

    const { way, cabine, departure, arrival, dateDep, dateRet, adult, child, infant, lastname, email, phone, message } = req.body;
    await new MailService().sendFlightMail(way, cabine, departure, arrival, dateDep, dateRet, adult, child, infant, lastname, email, phone, message, function (error, info) { 

        if(error){
            res.send(false)
        }

        else{
            res.send(true)
        }
    })

})

router.post('/dhl',async (req,res,next)=>{

    const { civility, firstname, lastname, email, phone, country, weight, contains, dimensions } = req.body;
    await new MailService().sendDhlMail(civility, firstname, lastname, email, phone, country, weight, contains, dimensions, function (error, info) { 

        if(error){
            res.json({message: 'error'})

        }
        else{
            res.json({message: 'success'})
        }
    })

})

router.post('/car', async (req,res,next)=>{

    const {reason, town, capacity, driver, dateDeb, dateFin, heureDeb, heureFin, extras, civility, firstname, lastname, email, phone} = req.body;
    await new MailService().sendCarMail(reason, town, capacity, driver, dateDeb, dateFin, heureDeb, heureFin, extras, civility, firstname, lastname, email, phone, function (error, info) { 

        if(error){
            res.json({message: 'error'})

        }
        else{
            res.json({message: 'success'})
        }
    })

})

router.post('/apart', async (req,res,next) =>{
    
    const {type, town, dateDeb, dateFin, extras, civility, firstname, lastname, email, phone} = req.body;

    await new MailService().sendApartMail(type, town, dateDeb, dateFin, extras, civility, firstname, lastname, email, phone, function (error, info) { 

        if(error){
            res.json({message: 'error'})

        }
        else{
            res.json({message: 'success'})
        }
    })

})

router.post('/hostel', async (req,res,next) =>{
    
    const {nbr, town, dateDeb, dateFin, extras, civility, firstname, lastname, email, phone, hotels} = req.body;
    await new MailService().sendHostelMail(nbr, town, dateDeb, dateFin, extras, civility, firstname, lastname, email, phone,hotels, function (error, info) { 

        if(error){
            res.json({message: 'error'})

        }
        else{
            res.json({message: 'success'})
        }
    })

})


router.post('/car-paris', async (req,res,next) =>{
    
    const {departure, arrival, date, hour, civility, firstname, lastname, email} = req.body;
    await new MailService().sendCarParisMail(departure, arrival, date, hour, civility, firstname, lastname, email, function (error, info) { 

        if(error){
            res.json({message: 'error'})

        }
        else{
            res.json({message: 'success'})
        }
    })

})






module.exports = router;