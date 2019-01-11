const Appointment = require('../models/Appointment')

const appController = {
    
    index: (req,res) => {
        Appointment.find({}).populate("sitterComment").then((appointment) => {
            // const comments = appointment.sitterComment
            // , comments:comments
            res.render('ownerview/index', {appointment: appointment})

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

    edit: (req, res) => {
        const appId = req.params.id
        console.log(appId)
        res.render('ownerview/edit', {appId})
    },

    update: (req,res) => {
        const appId = req.params.id
        Appointment.findByIdAndUpdate(appId, req.body, {new: true}).then((newApp) => {
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

