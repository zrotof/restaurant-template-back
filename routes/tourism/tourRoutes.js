const express = require('express');
const router = express.Router();

const TourService = require('../../services/tourService');

router.get('/', async(req, res) =>{

    res.end("You are in the sauce")
});

router.get('/dubai', async (req,res,next)=>{
    
    const tour = new TourService().getDubaiTour();
    res.send(tour);
})

router.get('/israel-egypte',async (req,res,next)=>{

    const tour = new TourService().getIsraelEgypteTour();
    res.send(tour);
})

router.get('/caire',async (req,res,next)=>{
    const tour = new TourService().getCaireTour();
    res.send(tour);
})

router.get('/kribi',async (req,res,next)=>{

    const tour = new TourService().getKribiTour();
    res.send(tour);

})

router.get('/israel', async (req,res,next)=>{

    const tour =  new TourService().getIsrael();
    res.send(tour);

})


module.exports = router;