const mongoose = require('mongoose');

const coolerSchema = mongoose.Schema({
    power: Number,
    image: String,
    price: Number,
    title: String
})

const Cooler = mongoose.model("Cooler", coolerSchema)
module.exports = Cooler;