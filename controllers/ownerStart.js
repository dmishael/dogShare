const Dog = require('../models/Dog')

const ownerStartController = {
    index: (req,res) => {
        Dog.find({}).then((dogs) => {
            res.send(dogs)
        })
    }
}

module.exports = ownerStartController