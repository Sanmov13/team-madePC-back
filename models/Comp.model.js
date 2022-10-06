const mongoose = require("mongoose");

const compSchema = mongoose.Schema({
  name: String,
  price: Number,
  image: String,
  ram: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "RAM",
  },
  videocard: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "VideoCard",
  },
  hardCard: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "HDD",
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
    ref: "Math",
  },
  powerunits: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "PowerUnit",
  },
  count: {
    type: Number,
    default: 1
  },
  total: Number
});

const Comp = mongoose.model("Comp", compSchema);
module.exports = Comp;
