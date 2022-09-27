const mongoose = require("mongoose");

const compSchema = mongoose.Schema({
    name: String,
    price: String,
    image: String,
    ram: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "ram",
    },
    videocard: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "videocard",
    },
    hardCard: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "hardcard",
    },
    ssd: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "ssd",
    },
    processor: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "processor",
    },
    corpus: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Corpus",
    },
    cooler: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Cooler",
    },
});

const Comp = mongoose.model("Comp", compSchema);
module.exports = Comp;
