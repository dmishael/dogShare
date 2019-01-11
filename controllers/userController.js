
const UserProfile = require('../models/UserProfile')


const ownerStartController = {

    index: (req, res) => {
        UserProfile.find({}).then(profile => {
            res.render('ownerview/home', { profile })
        })

    },

    new: (req, res) => {
        res.render('ownerView/userProfile')
    },

    create: (req, res) => {
        UserProfile.create({
            name: req.body.name,
            address: req.body.address,
            dogName: req.body.dogName
        }).then(userprofile => {
            res.redirect('/')
        })
    },



    show: (req, res) => {
        const userId = req.params.userId
        UserProfile.findById(userId).then((userId) => {
            res.render('ownerView/userShow'), { userId }
        })
    },
    edit: (req, res) => {
        const userProfile = req.params.id
        // console.log(newslinkId)
        res.redirect('/')
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


    create: (req, res) => {
        UserProfile.create({
            name: req.body.name,
            address: req.body.address,
            dogName: req.body.dogName,
        }).then(userprofile => {
            res.redirect(`/${userprofile_id}`)
        })


*/
module.exports = ownerStartController


