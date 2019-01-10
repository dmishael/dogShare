const SitterComment = require('../models/SitterComment')
const Appointment = require('../models/Appointment')

const sitterStartController = {
    
    index: (req,res) => {
        Appointment.find({}).then(appointment => {
            res.render('ownerview/index', {appointment})
        })
    },
        
    new: (req,res) => {
        res.render('ownerView/appointment')
    },

    create: (req, res) => {
        Appointment.create({
            startDate: req.body.startDate,
            endDate: req.body.endDate,
            owner: req.body.owner,
            dog: req.body.dog
        }).then(appointment => {
            res.redirect('/newapp')
        })
    }
}

module.exports = sitterStartController 

