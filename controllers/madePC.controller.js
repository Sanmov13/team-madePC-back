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
        "ram ssd processor corpus cooler powerunits videocard hardcard math"
      );

      res.json(result);
    } catch (e) {
      return res.status(404).json(e.toString());
    }
  },

  getMadePC: async (req, res) => {
    try {
      const data = await MadePC.find().populate(
        "ram ssd processor corpus cooler powerunits videocard hardcard math"
      );
      res.json(data);
    } catch (e) {
      return res.status(404).json(e.toString());
    }
  },
  getOneMPC: async (req, res) => {
    const data = await MadePC.find();
    let result;
    for (let i = 0; i < data.length; i++) {
      result = data[i];
    }

    res.json(result);
  },

  updateMadePC: async (req, res) => {
    try {
      const data = await MadePC.findById(req.params.id).populate(
        "ram ssd processor corpus cooler powerunits videocard math"
      );

      const sum = Number(
        data.ram.price +
          data.videocard.price +
          data.ssd.price +
          data.processor.price +
          data.corpus.price +
          data.cooler.price +
          data.math.price +
          data.powerunits.price
      );

      const all = await MadePC.updateOne(data, {
        $set: { price: sum },
      });

     res.json(all);
    } catch (e) {
      return res.status(404).json(e.toString());
    }
  },
  mPCupdate: async (req, res) => {
    const data = await MadePC.find();
    var result;
    for (let i = 0; i < data.length; i++) {
      result = data[i];
    }

    try {
      const {
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
      } = req.body;

      const fndOne = await MadePC.findOne(result).populate(
        "ram ssd processor corpus cooler powerunits videocard hardcard math"
      );
      const upd = await MadePC.updateOne(fndOne, {
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
      });

      const sum = await Number(
        fndOne.ram.price +
          fndOne.videocard.price +
          fndOne.ssd.price +
          fndOne.processor.price +
          fndOne.corpus.price +
          fndOne.cooler.price +
          fndOne.math.price +
          fndOne.powerunits.price +
          fndOne.hardcard.price
      );

      const all = await MadePC.updateOne(fndOne, {
        $set: { price: sum },
      });

      res.json(all);
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
