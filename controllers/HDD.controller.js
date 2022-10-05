const HDD = require("../models/HDD.model")



module.exports.HDDController = ({
    addHDD: async (req, res) => {
        const data = await HDD.create({
            title,
            name,
            storageСapacity,
            price,
            img,
        } = req.body
    )
        res.json(data)
    },

    getHDD: async (req, res) => {
        const data = await HDD.find()
        res.json(data)
    },

    deleteHDD : async (req, res) => {
        const data = await HDD.findByIdAndDelete(req.params.id)
        res.json(data)
    }
})