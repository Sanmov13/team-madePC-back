const Ssd = require("../models/Ssd.model")

module.exports.ssdController = ({
    addSsd: async (req,res)=>{
        const { name,volumeStorage,price,type,image} = req.body

        const data = await Ssd.create({
            name,volumeStorage,price,type,image
        })
        await res.json(data)
    },
    getSsd: async(req,res)=>{
        const data = await Ssd.find()
        await res.json(data)
    },

    deleteSsd: async (req, res) => {
        const data = await Ssd.findByIdAndDelete(req.params.id)
       await res.json(data)
    }
})