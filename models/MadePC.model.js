const mongoose = require("mongoose");

const madePCSchema = mongoose.Schema({
  name: String,
  price: {
    type: Number,
    default: 0
  },
  image: String,
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
  ram: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "RAM",
  },
  videocard: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "VideoCard",
  },
  hardcard: {
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
});

const MadePC = mongoose.model("MadePC", madePCSchema);
module.exports = MadePC;
