const mongoose = require ('../db/connection')
const Schema = mongoose.Schema
const Dog = require('../models/Dog')

const dogProfile = new Schema ({
    dogName: Dog,
    dogBehavior: [],
    accidents: [],
    shed: []
})

module.exports = mongoose.model("dogProfile", dogProfile)