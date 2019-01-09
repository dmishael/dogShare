const express = require('express')
const router = express.Router()
const ownerStartController = require('../controllers/ownerStart')

router.get('/ownerview/feed', ownerStartController.new)
router.get('/ownerview/post', ownerStartController.index)

module.exports = router
