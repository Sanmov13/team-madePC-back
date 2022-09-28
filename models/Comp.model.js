const mongoose = require("mongoose");

const compSchema = mongoose.Schema({
    name: String,
    price: String,
    image: String,
    ram: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Ram",
    },
    videocard: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Videocard",
    },
    hardCard: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Hardcard",
    },
    ssd: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Ssd",
    },
    processor: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Processor",
    },
    corpus: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Corpus",
    },
    cooler: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Cooler",
    },
    math: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Math"
    }
});

const Comp = mongoose.model("Comp", compSchema);
module.exports = Comp;
