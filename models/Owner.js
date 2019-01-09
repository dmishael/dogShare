const mongoose = require ('../db/connection')
const Schema = mongoose.Schema
// const Dog = require('../models/Dog')

const Owner = new Schema ({
    name: String,
    sitter: String,
    address: String,
    dog: []
})

module.exports = mongoose.model("Owner", Owner)
