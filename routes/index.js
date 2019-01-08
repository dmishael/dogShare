const express = require('express')
const router = express.router()
const ownerStartController = require('../controllers/ownerStart')

router.get('/', ownerStartController.index)

module.exports = router
