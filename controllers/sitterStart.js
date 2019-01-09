const sitterET = require('../models/SitterExitTicket')


const sitterStartController = {
    new: (req,res) => {
        sitterET.find({}).then(SET => {
            res.render('sitterView/sitterExit', {SET})
        })
    }
}

module.exports = sitterStartController