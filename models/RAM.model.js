
const mongoose = require("mongoose")

const RAMSchema = mongoose.Schema({
    title: String,
    name: String,
    memoryCapacity: String,
    memoryType: String,
    clockFrequency: String,
    price: Number,
    img: String,
})

const RAM = mongoose.model("RAM", RAMSchema);
module.exports = RAM;