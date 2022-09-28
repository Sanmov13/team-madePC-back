const Math = require("../models/Math.model");

module.exports.math = {
  getMath: async (req, res) => {
    const data = await Math.find().populate(
      "ram videocard hardCard ssd processor"
    );
    res.json(data);
  },
  addMath: async (req, res) => {
    const data = await Math.create(
      ({
        name,
        type,
        socket,
        image,
        ram,
        currentRam,
        maxRam,
        videocard,
        hardCard,
        currentHardCard,
        ssd,
        currentSsd,
        processor,
      } = req.body)
    );
    const result = await data.populate(
      "ram videocard hardCard ssd processor"
    );
    res.json(result);
  },
  updateMath: async (req, res) => {
    const data = await Math.findByIdAndUpdate(
      req.params.id,
      ({
        name,
        type,
        socket,
        image,
        ram,
        currentRam,
        maxRam,
        videocard,
        hardCard,
        currentHardCard,
        ssd,
        currentSsd,
        processor,
      } = req.body)
    );
    const result = await data.populate(
      "ram videocard hardCard ssd processor"
    );
    res.json(result);
  },
  deleteMath: async (req, res) => {
    const data = await Math.findByIdAndDelete(req.params.id);
    res.json(data);
  },
};
