const mongoose = require ('../db/connection')
const Schema = mongoose.Schema

const dog = new Schema ({
    name: String
})

module.exports = mongoose.model("dog", dog)