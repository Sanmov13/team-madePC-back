const Question = require("../models/Question.model");

module.exports.questionController = {
  addQuestion: async (req, res) => {
    const data = await Question.create(({ vopros, otvet, nomer } = req.body));
    res.json(data);
  },

  getQuestion: async (req, res) => {
    const data = await Question.find();
    res.json(data);
  },

  deleteQuestion: async (req, res) => {
    const data = await Question.findByIdAndDelete(req.params.id);
    res.json(data);
  },
};
