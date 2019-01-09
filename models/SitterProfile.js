const mongoose = require ('../db/connection')
const Schema = mongoose.Schema

const sitterProfile = new Schema ({
    // name: String,
    // responsiveness: [],
    // trusted: [],
    // friendly: []
    ownerExitTickets: [{
        type: Schema.Types.ObjectId,
        ref: "OwnerExitTicket"
    }]
})

module.exports = mongoose.model("sitterProfile", sitterProfile)