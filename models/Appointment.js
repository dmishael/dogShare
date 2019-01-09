const mongoose = require ('../db/connection')
const Schema = mongoose.Schema
// const Dog = require('../models/Dog')
// const Owner = require('../models/Owner')

const Appointment = new Schema ({
    startDate: String,
    endDate: String,
    owner: String,
    dog: String
})

module.exports = mongoose.model("Appointment", Appointment)