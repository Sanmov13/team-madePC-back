const mongoose = require("mongoose")

const SsdSchema = mongoose.Schema({
    name:String,
    type: String,
    volumeStorage:Number,
    price:Number,
    image:String
})

const Ssd = mongoose.model("Ssd",SsdSchema)

module.exports = Ssd