const mongoose = require("mongoose")

const PowerUnitSchema = mongoose.Schema({
    name:String,
    power: Number,
    price:Number,
    image:String
})

const PowerUnit = mongoose.model("PowerUnit",PowerUnitSchema)

module.exports = PowerUnit