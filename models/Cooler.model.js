const mongoose = require('mongoose');

const coolerSchema = mongoose.Schema({
    power: String,
    image: String,
    price: Number,
    name: String
})

const Cooler = mongoose.model("Cooler", coolerSchema)
module.exports = Cooler;