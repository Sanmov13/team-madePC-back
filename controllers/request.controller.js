const Request = require('../models/Request.model');

module.exports.reqcontroller = ({

    addRequest: async (req, res) => {
        try {
            const data = await Request.create({ name, number, email, comment } = req.body);
            res.json(data)
        } catch (e) {
            return res.status(404).json(e.toString())
        }
    },

    getRequest: async (req, res) => {
        try {
            const data = await Request.find()
            res.json(data)
        } catch (e) {
            return res.status(404).json(e.toString())
        }
    },

    deleteRequest: async (req, res) => {
        try {
            const data = await Request.findByIdAndDelete(req.params.id)
            res.json(data)
        } catch (e) {
            return res.status(404).json(e.toString())
        }
    }
})