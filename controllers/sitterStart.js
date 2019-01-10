const SitterComment = require('../models/SitterComment')


const sitterStartController = {
    
    new: (req,res) => {
        SitterComment.find({}).then(Comment => {
            res.render('ownerview/appointment', {Comment})
        })

    }
}

module.exports = sitterStartController