const express = require('express');
const router = express.Router();

const ProductService = require('../../services/productService');

router.get('/', async(req, res) =>{
    res.end("You are in the sauce, raw sauce, no ketchup")
});

router.get('/recommanded', async (req,res,next) => {
    const products = new ProductService().getRecommandedProducts();
    res.send(products)
})

router.get('/meals',async (req,res,next)=>{
    const products = new ProductService().getMealProducts();
    res.send(products);
})

router.get('/fishes', async (req,res,next)=>{
    const products = new ProductService().getFishProducts();
    res.send(products);
})

router.get('/vegetables',async (req,res,next)=>{
    const products = new ProductService().getVegetableProducts();
    res.send(products);
})

router.get('/breakfasts',async (req,res,next)=>{
    const products = new ProductService().getBreakfastProducts();
    res.send(products);
})

router.get('/accompaniments',async (req,res,next)=>{
    const products = new ProductService().getAccompanimentProducts();
    res.send(products);
})

router.get('/drinks', async (req,res,next)=>{
    const products =  new ProductService().getDrinkProducts();
    res.send(products);
})

router.get('/deserts', async (req,res,next)=>{
    const products =  new ProductService().getDesertProducts();
    res.send(products);
})

module.exports = router;