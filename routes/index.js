const express = require('express')
const router = express.Router()
const ownerStartController = require('../controllers/userController')


router.get('/new', ownerStartController.new)


router.post('/', ownerStartController.create)
router.get('/', ownerStartController.index)

// router.edit('/', ownerStartController.edit)


// router.get('/:id', ownerStartController.show)



// router.get('/user', ownerStartController.)


module.exports = router


// .get show(read)
// .patch update  
// .post create 
// .delete delete  
