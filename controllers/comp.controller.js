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
          count,
          total,
        } = req.body)
      );
      const result = await data.populate(
        "ram ssd processor corpus cooler powerunits videocard hardCard math"
      );

      const sum = await Number(
        result.ram.price +
          result.videocard.price +
          result.ssd.price +
          result.processor.price +
          result.corpus.price +
          result.cooler.price +
          result.math.price +
          result.powerunits.price +
          result.hardCard.price
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
        "ram ssd processor corpus cooler powerunits videocard hardCard math"
      );
      res.json(data);
    } catch (e) {
      return res.status(404).json(e.toString());
    }
  },

  updateComp: async (req, res) => {
    try {
      const data = await Comp.findById(req.params.id);
      const result = await data.populate(
        "ram ssd processor corpus cooler powerunits videocard hardCard math"
      );

      const sum = await Number(
        result.ram.price +
          result.videocard.price +
          result.ssd.price +
          result.processor.price +
          result.corpus.price +
          result.cooler.price +
          result.math.price +
          result.powerunits.price +
          result.hardCard.price
      );

      const all = await Comp.updateOne(result, {
        $set: { price: sum },
      });

      return await res.json(result);
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

  countPlus: async (req, res) => {
    try {
      const comp = await Comp.findById(req.params.id);
      const data = await Comp.findByIdAndUpdate(req.params.id, {
        count: comp.count + 1,
        price: comp.price + comp.total,
      });
      res.json(data);
    } catch (e) {
      return res.status(404).json(e.toString());
    }
  },

  countMinus: async (req, res) => {
    try {
      const comp = await Comp.findById(req.params.id);
      const data = await Comp.findByIdAndUpdate(req.params.id, {
        count: comp.count - 1,
        price: comp.price - comp.total,
      });
      res.json(data);
    } catch (e) {
      return res.status(404).json(e.toString());
    }
  },
};
