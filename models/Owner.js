const mongoose = require ('../db/connection')
const Schema = mongoose.Schema

const Owner = new Schema ({
    name: String,
    sitterName: String,
    dogName: String,
    address: String
})

module.exports = mongoose.model("Owner", Owner)
