const mongoose = require ('../db/connection')
const Schema = mongoose.Schema


const Appointment = new Schema ({
    startDate: String,
    endDate: String,
    owner: [],
    dog: []
})

module.exports = mongoose.model("Appointment", Appointment)