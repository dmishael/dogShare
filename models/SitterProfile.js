const mongoose = require ('../db/connection')
const Schema = mongoose.Schema

const sitterProfile = new Schema ({
    name: String,
    responsiveness: [],
    trusted: [],
    friendly: []
})

module.exports = mongoose.model("sitterProfile", sitterProfile)