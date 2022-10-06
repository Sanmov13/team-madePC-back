const mongoose = require('mongoose');

const requestSchema = mongoose.Schema({
    name: String,
    number: Number,
    email: String,
    comment: String,
    comp: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Comp'
    }]
})

const Request = mongoose.model("Request", requestSchema)
module.exports = Request;