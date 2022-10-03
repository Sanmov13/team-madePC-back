const mongoose = require("mongoose");

const VideoCardSchema = mongoose.Schema({
  name: String,
  volumeStorage: Number,
  typeStorage: String,
  price: Number,
  image: String,
});

const VideoCard = mongoose.model("VideoCard", VideoCardSchema);

module.exports = VideoCard;
