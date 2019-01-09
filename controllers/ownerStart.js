const Dog = require('../models/Dog')
const Owner = require('../models/Owner')
const Appointment = require('../models/Appointment')
const DogProfile = require('../models/DogProfile')


const ownerStartController = {
    new: (req,res) => {
        Owner.find({}).then(owner => {
            res.render('ownerview/feed', {owner})
        })
        
    },

    index: (req,res) => {
        Dog.find({}).then(dog => {
            res.render('ownerview/post', {dog})
        })
        
    },
       
    show: (req,res) => {
        Appointment.find({}).then(appointment => {
            res.render('ownerview/appointment', {appointment})
        })
        
    },
    
    see: (req,res) => {
        DogProfile.find({}).then(dogProf => {
            res.render('ownerview/dogProfile', {dogProf})
        })
        
    }
    }

/*
const ownerStartController = {
    index: (req,res) => {
        const dogID = req.params.id
        console.log(dogId)
        Dog.findById(dogId).populate('ratings').then((dogCard) => {
            const ratings = dogCard.ratings
            res.render('log/dog', { comments, ratings})
        })
        }
}

*/
module.exports = ownerStartController