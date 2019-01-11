const SitterComment = require('../models/SitterComment')
const Appointment = require('../models/Appointment')

const appController = {
    
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
            res.redirect('/apps')
        })
    },

    delete: (req,res) => {
        const appId = req.params.id
        console.log(appId)
        Appointment.findOneAndDelete(appId)
        .then(() => {
            res.redirect('/apps')
        }).catch((error) => {
            console.log(error)
        })
    }
}

module.exports = appController 

