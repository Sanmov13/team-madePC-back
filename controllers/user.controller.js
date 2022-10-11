const User = require("../models/User.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.userController = {
    registerUser: async (req, res) => {
        const { login, password } = req.body;

        const hash = await bcrypt.hash(password, Number(process.env.BCRYPT_ROUNDS));

        const user = await User.create({ login: login, password: hash });

        res.json(user);
    },

    login: async (req, res) => {
        const { login, password } = req.body;

        const candidate = await User.findOne({ login });

        if (!candidate) {
            return res.status(401).json("Неверный логин");
        }

        const valid = await bcrypt.compare(password, candidate.password);

        if (!valid) {
            return res.status(401).json("Неверный пароль");
        }

        const payload = {
            id: candidate._id,
            login: candidate.login,
        };
        const login1 = candidate._id;

        const token = await jwt.sign(payload, `${process.env.SECRET_JWT_KEY}`, {
            expiresIn: "7d",
        });

        return res.json({ token, login1 });
    },

    addInBasket: async (req, res) => {
        try {
            const user = await User.findByIdAndUpdate(req.params.id, {
                $addToSet: { basket: req.body.basket },
            }).populate("basket basketMade");

            const data = await user;
            res.json(data);
        } catch (e) {
            return res.status(404).json(e.toString());
        }
    },
    addInMadeBasket: async (req, res) => {
        try {
            const user = await User.findByIdAndUpdate(req.params.id, {
                $addToSet: { basketMade: req.body.basketMade },
            }).populate("basket basketMade");

            const data = await user;
            res.json(data);
        } catch (e) {
            return res.status(404).json(e.toString());
        }
    },

    removeFromBasket: async (req, res) => {
        try {
            const user = await User.findByIdAndUpdate(req.params.id, {
                $pull: { basket: req.body.basket }
            }).populate("basket");
            res.json(user);
        } catch (e) {
            return res.status(404).json(e.toString());
        }
    },

    removeFromMadebasket: async (req, res) => {
        try {
            const user = await User.findByIdAndUpdate(req.params.id, {
                $pull: { basketMade: req.body.basketMade }
            }).populate("basket basketMade");
            res.json(user);
        } catch (e) {
            return res.status(404).json(e.toString());
        }
    },

    getUser: async (req, res) => {
        const data = await User.find().populate({
            path: 'basketMade basket',
            populate: {
                path: 'corpus',
                model: 'Corpus'
            }
        })
        res.json(data);
    },
};
