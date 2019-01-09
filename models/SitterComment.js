const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Comment = new Schema({
    name: String,
    email: String,
    cellNumber: String,
    comments: String
});

module.exports = mongoose.model("Comment", Comment)