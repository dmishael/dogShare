const mongoose = require ('../db/connection')
const Schema = mongoose.Schema

const OwnerExitTicket = new Schema ({
    sitterName: String,
    responsiveness: Number,
    trusted: Number,
    friendly: Number    
})

module.exports = mongoose.model("OwnerExitTicket", OwnerExitTicket)
