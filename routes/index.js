const express = require('express')
const router = express.Router()
const ownerStartController = require('../controllers/userController')
const appController = require('../controllers/appController')
const sitterController = require('../controllers/SitterController')


router.get('/new', ownerStartController.new)
router.post('/', ownerStartController.create)
router.get('/', ownerStartController.index)

// router.edit('/', ownerStartController.edit)
// router.get('/:id', ownerStartController.show)
// router.get('/user', ownerStartController.)

router.get('/appform', appController.new)
router.post('/newapp', appController.create)
router.get('/apps', appController.index)
router.patch('/:id', appController.update)
router.delete('/apps/:id', appController.delete)


router.get('/:id/appointment', sitterController.new)
router.post('/:id', sitterController.create)

module.exports = router


// .get show(read)
// .patch update  
// .post create 
// .delete delete  
