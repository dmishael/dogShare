const Appointment = require('../models/Appointment')
const UserProfile = require('../models/UserProfile')

const ownerStartController = {
    index: (req,res) => {
        UserProfile.find({}).then(profile => {
            res.render('ownerview/home', {profile})
        })
        
    }

}


/*
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