const MadePC = require("../models/MadePC.model");

module.exports.madePC = {
  addMadePC: async (req, res) => {
    try {
      const data = await MadePC.create(
        ({
          name,
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

      const sum = await Number(
        result.ram.price +
          result.videocard.price +
          result.ssd.price +
          result.processor.price +
          result.corpus.price +
          result.cooler.price
      );

      const all = await MadePC.updateOne(result, {
        $set: { price: sum },
      });

      return await res.json(result);
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
