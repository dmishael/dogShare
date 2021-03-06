const mongoose = require('../db/connection')
const Schema = mongoose.Schema


const User = new Schema({
    name: String,
    address: String,
    dogName: String,
    scheduledApp: [{
        type: Schema.Types.ObjectId,
        ref: "scheduledApp"
    }]
})

module.exports = mongoose.model("User", User)
