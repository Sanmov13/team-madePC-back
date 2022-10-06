const MadePC = require("../models/MadePC.model");

module.exports.madePC = {
  addMadePC: async (req, res) => {
    try {
      const data = await MadePC.create(
        ({
          name,
          user,
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
        "ram ssd processor corpus cooler powerunits videocard hardcard user"
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

      res.json(result);
    } catch (e) {
      return res.status(404).json(e.toString());
    }
  },

  getMadePC: async (req, res) => {
    try {
      const data = await MadePC.find().populate(
        "ram ssd processor corpus cooler powerunits videocard hardcard user"
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
      res.json(data);
    } catch (e) {
      return res.status(404).json(e.toString());
    }
  },

  updateMadePC: async (req, res) => {
    try {
      const {
        name,
        user,
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
      } = req.body;

      const data = await MadePC.findByIdAndUpdate(req.params.id, {
        name,
        user,
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
      });
      const result = await data.populate(
        "ram ssd processor corpus cooler powerunits videocard hardcard user"
      );

      res.json(result);
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
