const express = require('express')
const router = express.Router()
const ownerStartController = require('../controllers/ownerStart')


router.get('/', ownerStartController.index)




module.exports = router
