const express = require('express')
const router = express.Router()
const ownerStartController = require('../controllers/userController')
const appController = require('../controllers/appController')
const sitterController = require('../controllers/sitterController')


router.get('/new', ownerStartController.new)
router.post('/', ownerStartController.create)
router.get('/', ownerStartController.index)
router.delete('/:id', ownerStartController.delete)


router.get('/appform', appController.new)
router.post('/newapp', appController.create)
router.get('/apps', appController.index)
router.get('/:id/edit', appController.edit)
router.patch('/:id', appController.update)
router.delete('/apps/:id', appController.delete)


router.get('/:id/appointment', sitterController.new)
router.post('/:id', sitterController.create)
router.delete('/comments/:id', sitterController.delete)

module.exports = router


