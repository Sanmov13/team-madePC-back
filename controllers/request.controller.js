const Request = require("../models/Request.model");
const MadePC = require("../models/RequestMadePC.module");

module.exports.reqcontroller = {
  addRequest: async (req, res) => {
    try {
      const { name, number, email, comment, comp } = req.body;
      const data = await Request.create({
        name,
        number,
        email,
        comment,
        comp,
      });
      const result = await data.populate("comp");

      res.json(result);
    } catch (e) {
      return res.status(404).json(e.toString());
    }
  },

  getRequest: async (req, res) => {
    try {
      const data = await Request.find().populate("comp");
      res.json(data);
    } catch (e) {
      return res.status(404).json(e.toString());
    }
  },

  deleteRequest: async (req, res) => {
    try {
      const data = await Request.findByIdAndDelete(req.params.id);
      res.json(data);
    } catch (e) {
      return res.status(404).json(e.toString());
    }
  },

  addRequestMade: async (req, res) => {
    try {
      const data = await MadePC.create(
        ({ name, number, email, comment, comp } = req.body)
      );
      const result = await data.populate("comp");

      res.json(result);
    } catch (e) {
      return res.status(404).json(e.toString());
    }
  },

  getRequestMade: async (req, res) => {
    try {
      const data = await MadePC.find().populate("comp");
      res.json(data);
    } catch (e) {
      return res.status(404).json(e.toString());
    }
  },

  deleteRequestMade: async (req, res) => {
    try {
      const data = await MadePC.findByIdAndDelete(req.params.id);
      res.json(data);
    } catch (e) {
      return res.status(404).json(e.toString());
    }
  },
};
