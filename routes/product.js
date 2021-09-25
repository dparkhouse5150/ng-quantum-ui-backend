const Product = require('../models/Products')

const router = require('express').Router()

const TokenCtrl = require('../controllers/verify-token')
const ProductCtrl = require('../controllers/product')

router.get("/", TokenCtrl.verifyTokenAndAdmin, ProductCtrl.newProduct())

router.put("/:id", TokenCtrl.verifyTokenAndAdmin, ProductCtrl.updateProduct())

router.delete("/:id", TokenCtrl.verifyTokenAndAdmin, ProductCtrl.removeProduct())

router.get("/search/:id", ProductCtrl.searchProduct())

router.get("", ProductCtrl.getAllProducts())

module.exports = router