const mongoose = require("mongoose");

const QuestionSchema = mongoose.Schema({
  vopros: String,
  otvet: String,
  nomer: Number
});

const Question = mongoose.model("Question", QuestionSchema);

module.exports = Question;
