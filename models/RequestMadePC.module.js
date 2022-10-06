const mongoose = require('mongoose');

const requestMadePCSchema = mongoose.Schema({
    name: String,
    number: Number,
    email: String,
    comment: String,
    comp: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'MadePC'
    }]
})

const RequestMadePC = mongoose.model("RequestMadePC", requestMadePCSchema)
module.exports = RequestMadePC;