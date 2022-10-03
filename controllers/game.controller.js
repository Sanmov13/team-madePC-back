const Games = require("../models/Game.model")



module.exports.gamesController = ({
    addGames: async (req, res) => {
        const data = await  Games.create({ name, image, comp } = req.body);
        res.json(data);
    },

    getGames: async (req, res) => {
        try {
            const data = await Games.find().populate("comp")
            res.json(data)
        } catch (e) {
            return res.status(404).json("Ошибка при добавлении Игры")
        }
    },

    deleteGames: async (req, res) => {
        try {
            const data = await Games.findByIdAndDelete(req.params.id)
            res.json(data)
        } catch (e) {
            return res.status(404).json('Ошибка при удалении Игры')
        }
    }
})