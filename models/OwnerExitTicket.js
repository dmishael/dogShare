const mongoose = require ('../db/connection')
const Schema = mongoose.Schema

const OwnerExitTicket = new Schema ({
    responsiveness: Number,
    trusted: Number,
    friendly: Number,
    sitterName: String
})

module.exports = mongoose.model("OwnerExitTicket", OwnerExitTicket)
