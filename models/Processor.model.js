const mongoose = require('mongoose');

const processorSchema = mongoose.Schema({
    core: Number,
    threads: Number,
    frequency: Number,
    image: String,
    price: Number,
    name: String
})

const Processor = mongoose.model("Processor", processorSchema)
module.exports = Processor;