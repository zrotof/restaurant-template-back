const express = require('express');
const router = express.Router();

const { recommendedProduct, mealProduct, fishProduct, saladProduct, accompanimentProduct, desertProduct, breakfastProduct, drinkProdut } = require('../../controllers/product.controller');


router.get('/', async(req, res) =>{
    res.end("You are in the sauce, raw sauce, no ketchup")
});

router.get('/recommanded', recommendedProduct);

router.get('/viandes', mealProduct);

router.get('/poissons', fishProduct);

router.get('/salades', saladProduct);

router.get('/petit-dej', breakfastProduct);

router.get('/accompagnements', accompanimentProduct);

router.get('/boissons', drinkProdut);

router.get('/desserts', desertProduct);

module.exports = router;