const mongoose = require("mongoose");

const mathSchema = mongoose.Schema({
  name: String,
  type: String,
  ram: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "ram",
  },
  videocard: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "videocard",
  },
  hardcard: {
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
  frame: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "frame",
  },
  price: String,
});