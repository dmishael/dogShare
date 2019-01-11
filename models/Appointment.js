const mongoose = require('../db/connection')
const Schema = mongoose.Schema


const Appointment = new Schema({
    startDate: String,
    endDate: String,
    owner: String,
    dog: String,
    sitterComment: [{
        type: Schema.Types.ObjectId,
        ref: "Comment"
    }]
})

module.exports = mongoose.model("Appointment", Appointment) 