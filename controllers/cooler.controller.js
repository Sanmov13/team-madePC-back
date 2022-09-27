const Cooler = require('../models/Cooler.model');

module.exports.coolerController = ({
    addCooler: async (req, res) => {
        const data = await Cooler.create({ power, image, price, title } = req.body);
        res.json(data);
    },

    getCooler: async (req, res) => {
        try {
            const data = await Cooler.find()
            res.json(data)
        } catch (e) {
            res.status(404).json("Ошибка при добавлении кулера")
        }
    },

    deleteCooler: async (req, res) => {
        try {
            const data = await Cooler.findByIdAndDelete(req.params.id)
            res.json(data)
        } catch (e) {
            res.status(404).json('Ошибка при удалении Кулера')
        }
    }
})