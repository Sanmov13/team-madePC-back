const mongoose = require("mongoose");

const mathSchema = mongoose.Schema({
  name: String,
  type: String,
  ram: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "ram",
  },
  currentRam: Number,
  videocard: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "videocard",
  },
  hardCard: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "hardcard",
  },
  currentHardCard: Number,
  ssd: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "ssd",
  },
  currentSsd: Number,
  processor: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "processor",
  },
  frame: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "frame",
  },
  price: String,
});

const Math = mongoose.model("Math", mathSchema);

module.exports = Math;
