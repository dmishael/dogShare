const mongoose = require ('../db/connection')
const Schema = mongoose.Schema
const Dog = require('../models/Dog')

const dogProfile = new Schema ({
    dogName: String,
    dogBehavior: [],
    accidents: [],
    shed: []
})

module.exports = mongoose.model("dogProfile", dogProfile)