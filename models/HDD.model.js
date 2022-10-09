const mongoose = require("mongoose");

const HDDSchema = mongoose.Schema({
    title: String,
    name:String,
    storageСapacity: String,
    price: Number,
    img: String
})


const HDD = mongoose.model("HDD", HDDSchema);
module.exports = HDD;