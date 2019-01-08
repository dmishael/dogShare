dog = require('../models/dog')
const ownerStartController = {
    index: (req,res) => {
        dog.find({}).then((dogs) => {
            res.send(dogs)
        })
    }
}