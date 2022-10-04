const mongoose = require('mongoose');

const requestSchema = mongoose.Schema({
    name: String,
    number: Number,
    email: String,
    comment: String
})

const Request = mongoose.model("Request", requestSchema)
module.exports = Request;