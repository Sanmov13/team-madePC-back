const mongoose = require("mongoose")


const gamesSchema = mongoose.Schema({
    name: String,
    image: String,
    imageBackground: String,
    gamePCImg: String,
    comp: [{
            type: mongoose.SchemaTypes.ObjectId,
            ref: "Comp"
        }]
})

const Games = mongoose.model("Games", gamesSchema)
module.exports = Games;
 