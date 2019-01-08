const mongoose = require ('../db/connection')
const Schema = mongoose.Schema

const Dog = new Schema ({
    name: String,
    weight: Number,
    breed: String,
    behavior: Number,
    accidents: Number,
    shed: Number,
    date: String
})

module.exports = mongoose.model("Dog", Dog)