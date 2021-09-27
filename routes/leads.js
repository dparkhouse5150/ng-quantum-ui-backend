const LeadsCtrl = require('../controllers/leads')
const TokenCtrl = require('./verify-token')

const router = require('express').Router()

router.put("/:id", TokenCtrl.verifyTokenAndAuthorization, LeadsCtrl.updateUser())

router.delete("/:id", TokenCtrl.verifyTokenAndAuthorization, LeadsCtrl.removeLead())

router.get('/find/:id', TokenCtrl.verifyTokenAndAdmin, LeadsCtrl.searchLead())

router.get('/', TokenCtrl.verifyTokenAndAdmin, LeadsCtrl.getAllLeads())

//! this function is useless
router.get('/stats', TokenCtrl.validateTokenAndAuthorization, LeadsCtrl.stats)