const MadePC = require("../models/MadePC.model");

module.exports.madePC = {
  addMadePC: async (req, res) => {
    try {
      const data = await MadePC.create(
        ({
          price,
          image,
          ram,
          videocard,
          hardcard,
          ssd,
          processor,
          corpus,
          cooler,
          math,
          powerunits,
        } = req.body)
      );
      const result = await data.populate(
        "ram ssd processor corpus cooler powerunits videocard hardcard"
      );
      res.json(result);
    } catch (e) {
      return res.status(404).json(e.toString());
    }
  },

  getMadePC: async (req, res) => {
    try {
      const data = await MadePC.find().populate(
        "ram ssd processor corpus cooler powerunits videocard hardcard"
      );
      res.json(data);
    } catch (e) {
      return res.status(404).json(e.toString());
    }
  },

  updateMadePC: async (req, res) => {
    try {
      const data = await MadePC.findByIdAndUpdate(req.params.id, {
        ...req.body,
      });
    } catch (e) {
      return res.status(404).json(e.toString());
    }
  },

  deleteMadePC: async (req, res) => {
    try {
      const data = await MadePC.findByIdAndDelete(req.params.id);
      res.json(data);
    } catch (e) {
      return res.status(404).json(e.toString());
    }
  },
};
