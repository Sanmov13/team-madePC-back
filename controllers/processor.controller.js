const Processor = require('../models/Processor.model')

module.exports.processorController = ({
    addProcessor: async (req, res) => {
        const data = await Processor.create(
            {
                core,
                socket,
                threads,
                frequency,
                image,
                price,
                name
            } = req.body
        )
        res.json(data)
    },

    getProcessors: async (req, res) => {
        const data = await Processor.find();
        res.json(data)
    },

    deleteProcessor: async (req, res) => {
        const data = await Processor.findByIdAndDelete(req.params.id)
        res.json(data)
    }
})