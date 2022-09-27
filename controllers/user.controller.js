const User = require('../models/User.model')

module.exports.userController = ({
    registerUser: async (req, res) => {
        const { login, password } = req.body

        const hash = await bcrypt.hash(password, Number(process.env.BCRYPT_ROUNDS));

        const user = await User.create({ login: login, password: hash })

        res.json(user)
    },

    login: async (req, res) => {

        const { login, password } = req.body

        const candidate = await User.findOne({ login })

        if (!candidate) {
            return res.status(401).json('Неверный логин')
        }

        const valid = await bcrypt.compare(password, candidate.password);

        if (!valid) {
            return res.status(401).json('Неверный пароль');
        }

        const payload = {
            id: candidate._id,
            login: candidate.login
        }
        const login1 = candidate._id

        const token = await jwt.sign(payload, `${process.env.SECRET_JWT_KEY}`, {
            expiresIn: '7d'
        })

        return res.json({ token, login1 })
    },


})