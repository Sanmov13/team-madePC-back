const PowerUnit = require("../models/PowerUnit")

module.exports.powerUnitController = ({
    addPowerUnit: async (req,res)=>{
        const { name,power,price,image} = req.body

        const data = await PowerUnit.create({
            name,power,price,image
        })
        await res.json(data)
    },
    getPowerUnit: async(req,res)=>{
        const data = await PowerUnit.find()
        await res.json(data)
    },

    deletePowerUnit: async (req, res) => {
        const data = await PowerUnit.findByIdAndDelete(req.params.id)
       await res.json(data)
    }
})