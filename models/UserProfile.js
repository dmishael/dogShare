const mongoose = require ('../db/connection')
const Schema = mongoose.Schema
// const Dog = require('../models/Dog')

const User = new Schema ({
    name: String,
    address: String,
    dogName: String,
})

module.exports = mongoose.model("User", User)
