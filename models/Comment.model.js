const mongoose = require("mongoose");

const CommentSchema = mongoose.Schema({
  text: String,
});

const Comment = mongoose.model("Comment", CommentSchema);

module.exports = Comment;
