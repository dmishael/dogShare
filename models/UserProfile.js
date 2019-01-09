const mongoose = require ('../db/connection')
const Schema = mongoose.Schema
// const Dog = require('../models/Dog')

const User = new Schema ({
    name: String,
    address: String,
    dog: String,
    appointment: [{
        type: Schema.Types.ObjectId,
        ref: "appointment"
    }]
})

module.exports = mongoose.model("User", User)
