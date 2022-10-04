const Comp = require("../models/Comp.model");

module.exports.compController = {
  addComp: async (req, res) => {
    try {
      const data = await Comp.create(
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
        "ram ssd processor corpus cooler powerunits videocard hardCard"
      );

      const sum = await Number(
        result.ram.price +
          result.videocard.price +
          result.ssd.price +
          result.processor.price +
          result.corpus.price +
          result.cooler.price
      );

      const all = await Comp.updateOne(result, {
        $set: { price: sum },
      });

      return await res.json(result);
    } catch (e) {
      return res.status(404).json(e.toString());
    }
  },

  getComp: async (req, res) => {
    try {
      const data = await Comp.find().populate(
        "ram ssd processor corpus cooler powerunits videocard hardCard"
      );
      res.json(data);
    } catch (e) {
      return res.status(404).json(e.toString());
    }
  },

  updateComp: async (req, res) => {
    try {
      const data = await Comp.findByIdAndUpdate(req.params.id, { ...req.body });
    } catch (e) {
      return res.status(404).json(e.toString());
    }
  },

  deleteComp: async (req, res) => {
    try {
      const data = await Comp.findByIdAndDelete(req.params.id);
      res.json(data);
    } catch (e) {
      return res.status(404).json(e.toString());
    }
  },
};
