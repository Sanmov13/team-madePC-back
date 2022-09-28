const mongoose = require('mongoose');

const processorSchema = mongoose.Schema({
    core: Number,
    socket: String,
    threads: Number,
    frequency: String,
    image: String,
    price: Number,
    name: String
})

const Processor = mongoose.model("Processor", processorSchema)
module.exports = Processor;