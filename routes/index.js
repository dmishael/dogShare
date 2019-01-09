const express = require('express')
const router = express.Router()
const ownerStartController = require('../controllers/ownerStart')


router.get('/', ownerStartController.index)
router.get('/new', ownerStartController.new)
router.get('/new/:id', StartController.new)


module.exports = router


// .get show(read)
// .patch update  
// .post create 
// .delete delete  
