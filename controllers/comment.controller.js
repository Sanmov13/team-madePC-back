const Comment = require("../models/Comment.model");

module.exports.commentController = {
  addComment: async (req, res) => {
    const dat = await Comment.create(({ text, user } = req.body));
    const result = await dat.populate("user");
    res.json(result);
  },

  getComment: async (req, res) => {
    const data = await Comment.find().populate("user");
    res.json(data);
  },

  deleteComment: async (req, res) => {
    const data = await Comment.findByIdAndDelete(req.params.id);
    res.json(data);
  },
};
