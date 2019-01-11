const sitterComment = require('../models/SitterComment')
const Appointment = require('../models/Appointment')


const sitterController = {

    index: (req, res) => {
        sitterComment.find({}).then(appointment => {
            res.render('ownerView/index', { appointment })
        })
    },

    new: (req, res) => {
        res.render('sitterView/sitterComment', {
            appointmentId: req.params.id
        })
    },

    create: (req, res) => {
        sitterComment.create({
            name: req.body.name,
            email: req.body.email,
            cellNumber: req.body.cellNumber,
            comments: req.body.comments
        }).then(comment => {
            Appointment.findById(req.params.id).then(appointment => {
                console.log(comment)
                appointment.sitterComment.push(comment);

                appointment.save();
                res.redirect('/apps')

            });

        })
    },
    delete: (req, res) => {
        const commentId = req.params.id
        sitterComment.findByIdAndRemove(commentId)
            .then(() => {
                res.redirect('/apps')
            }).catch((error) => {
                console.log(error)
            })
    }
}

module.exports = sitterController

