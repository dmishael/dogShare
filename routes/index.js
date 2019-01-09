const express = require('express')
const router = express.Router()
const ownerStartController = require('../controllers/ownerStart')
const sitterStartController = require('../controllers/sitterStart')

router.get('/ownerview/feed', ownerStartController.new)
router.get('/ownerview/post', ownerStartController.index)
router.get('/ownerview/appointment', ownerStartController.show)
router.get('/ownerview/dogProfile', ownerStartController.see)

router.get('/sitterView/sitterExit', sitterStartController.new)



module.exports = router
