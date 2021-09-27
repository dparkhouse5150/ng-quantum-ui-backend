import { Cart } from '../models/Cart'

const express = require('express')
const router = express().Router()

const TokenCtrl = require('../controllers/verify-token')
const CartCtrl = require('../controllers/cart')

/** create a new Cart */
router.post('/', TokenCtrl.verifyToken, CartCtrl.NewCart())

/** update an existing Cart */
router.put('/:id', TokenCtrl.verifyTokenAndAuthorization, CartCtrl.Update())

/** update an existing Cart */
router.delete('/:id', TokenCtrl.verifyTokenAndAuthorization, CartCtrl.Delete())

/** find cart by user id */
router.get('/find/:userId', TokenCtrl.verifyTokenAndAuthorization, CartCtrl.Search())

/** get all the carts in the collection */
router.get("/", TokenCtrl.verifyTokenAndAdmin, CartCtrl.getAll())