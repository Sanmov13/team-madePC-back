const Corpus = require('../models/Сorpus.model')

module.exports.corpusController = ({
    addCorpus: async (req, res) => {
        const data = await Corpus.create(
            {
                image,
                price,
                name,
                width,
                height,
                boardSize,
            } = req.body
        )
        res.json(data)
    },

    getCorpus: async (req, res) => {
        const data = await Corpus.find();
        res.json(data)
    },

    deleteCorpus: async (req, res) => {
        const data = await Corpus.findByIdAndDelete(req.params.id)
        res.json(data)
    }
})