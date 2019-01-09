const mongoose = require ('../db/connection')
const Schema = mongoose.Schema


const Appointment = new Schema ({
    startDate: String,
    endDate: String,
    owner: String,
    dog: String
})

module.exports = mongoose.model("Appointment", Appointment)