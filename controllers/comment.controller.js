const Comment = require("../models/Comment.model");

module.exports.commentController = {
  addComment: async (req, res) => {
    const data = await Comment.create(({ text, user } = req.body));
    res.json(data);
  },

  getComment: async (req, res) => {
    const data = await Comment.find();
    res.json(data);
  },

  deleteComment: async (req, res) => {
    const data = await Comment.findByIdAndDelete(req.params.id);
    res.json(data);
  },
};
