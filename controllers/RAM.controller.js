const RAM = require("../models/RAM.model")

module.exports.RAMController = ({
    addRAM: async (req, res) => {
        const data = await RAM.create({
            title,
            memoryCapacity,
            memoryType,
            clockFrequency,
            price,
            img,
        } = req.body
    )
        res.json(data)
    },

    getRAM: async (req, res) => {
        const data  = await RAM.find();
        res.json(data)
    },

    deleteRAM: async (req, res) => {
        const data = await RAM.findByIdAndDelete(req.params.id)
        res.json(data)
    }
})