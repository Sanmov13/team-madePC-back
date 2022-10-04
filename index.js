const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();
const path = require("path");
const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(express.static(path.resolve(__dirname, "public")));
app.use("/public", express.static(path.join(__dirname, "public")));

app.use(require("./routes/math.route"));
app.use(require('./routes/user.route'));
app.use(require('./routes/processor.route'));
app.use(require("./routes/videoCard.route"))
app.use(require("./routes/powerUnit.route"))
app.use(require("./routes/ssd.route"))
app.use(require('./routes/cooler.route'));
app.use(require('./routes/comp.route'));
app.use(require('./routes/RAM.route'));
app.use(require("./routes/HDD.route"))
app.use(require('./routes/corpus.route'));
app.use(require('./routes/game.route'));
app.use(require("./routes/question.route"));
app.use(require("./routes/comment.route"));
app.use(require("./routes/madePC.route"));
app.use(require('./routes/request.route'));

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_SERVER);
    console.log("Подключились к базе");
  } catch (error) {
    console.log(error);
  }
};

app.listen(process.env.PORT, () => {
  console.log("Подключились к серверу");
});

start();
