const Cooler = require('../models/Cooler.model');

module.exports.coolerController = ({
    addCooler: async (req, res) => {
        const data = await Cooler.create({ power, image, price, name } = req.body);
        res.json(data);
    },

    getCooler: async (req, res) => {
        try {
            const data = await Cooler.find()
            res.json(data)
        } catch (e) {
            return res.status(404).json("Ошибка при добавлении кулера")
        }
    },

    deleteCooler: async (req, res) => {
        try {
            const data = await Cooler.findByIdAndDelete(req.params.id)
            res.json(data)
        } catch (e) {
            return res.status(404).json('Ошибка при удалении Кулера')
        }
    }
})