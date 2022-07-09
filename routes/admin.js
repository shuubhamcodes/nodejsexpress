// const path = require('path');

const express = require('express');
const router = express.Router();
const productController = require('../controllers/product');

// s
// /admin/add-product => GET
router.get('/add-product',productController.getAddproduct );

// /admin/add-product => POST
router.post('/add-product', productController.postAddproducts);

module.exports = router; 