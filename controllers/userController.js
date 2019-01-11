
const UserProfile = require('../models/UserProfile')


const ownerStartController = {

    index: (req, res) => {
        UserProfile.find({}).populate("User").then(profile => {
            res.render('ownerView/home', { profile })
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
    },
    delete: (req, res) => {
        const userId = req.params.id
        console.log(userId)
        UserProfile.findByIdAndRemove(userId)
            .then(() => {
                res.redirect('/')
            }).catch((error) => {
                console.log(error)
            })
    }
}

module.exports = ownerStartController


