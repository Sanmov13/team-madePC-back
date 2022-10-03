const VideoCard = require("../models/VideoCard.model")

module.exports.videoCardController = ({
    addVideoCard: async (req,res)=>{
        const { name,volumeStorage,typeStorage,price,image} = req.body

        const data = await VideoCard.create({
            name,volumeStorage,typeStorage,price,image
        })
        await res.json(data)
    },
    getVideoCard: async(req,res)=>{
        const data = await VideoCard.find()
        await res.json(data)
    },

    deleteVideoCard: async (req, res) => {
        const data = await VideoCard.findByIdAndDelete(req.params.id)
       await res.json(data)
    }
})