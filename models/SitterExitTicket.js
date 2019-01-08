const mongoose = require ('../db/connection')
const Schema = mongoose.Schema

const SitterExitTicket = new Schema ({
    dogName: String,
    dogBehavior: Number,
    accidents: Number,
    shed: Number
})

module.exports = mongoose.model("SitterExitTicket", SitterExitTicket)
