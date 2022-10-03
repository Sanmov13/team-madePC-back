const mongoose = require("mongoose");

const madePCSchema = mongoose.Schema({
  price: String,
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
});

const MadePC = mongoose.model("madePC", madePCSchema);
module.exports = MadePC;
