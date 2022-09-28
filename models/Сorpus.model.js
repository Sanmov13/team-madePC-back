const mongoose = require('mongoose');

const corpusSchema = mongoose.Schema({
    image: String,
    name: String,
    price: Number,
    width: Number,
    height: Number,
    boardSize: String,
})

const Corpus = mongoose.model("Corpus", corpusSchema)
module.exports = Corpus;