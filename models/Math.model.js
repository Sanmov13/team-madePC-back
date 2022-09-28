const mongoose = require("mongoose");

const mathSchema = mongoose.Schema({
  name: String,
  type: String,
  socket: String,
  image: String,
  ram: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "RAM",
  },
  currentRam: Number,
  maxRam: Number,
  videocard: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "VideoCard",
  },
  hardCard: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "HDD",
  },
  currentHardCard: Number,
  ssd: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Ssd",
  },
  currentSsd: Number,
  processor: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Processor",
  },
  price: Number,
});

const Math = mongoose.model("Math", mathSchema);

module.exports = Math;
