const mongoose = require('mongoose');

const coolerSchema = mongoose.Schema({
    power: String,
    image: String,
    price: {
        type: Number,
        default: 0
    },
    name: String
})

const Cooler = mongoose.model("Cooler", coolerSchema)
module.exports = Cooler;