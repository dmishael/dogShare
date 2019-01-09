const mongoose = require ('../db/connection')
const Schema = mongoose.Schema

const Dog = new Schema ({
    name: String,
    weight: Number,
    breed: String,
})

module.exports = mongoose.model("Dog", Dog)