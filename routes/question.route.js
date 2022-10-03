const Router = require("express");
const router = Router();
const { questionController } = require("../controllers/question.controller");

router.post("/question", questionController.addQuestion);
router.get("/question", questionController.getQuestion);
router.delete("/question/:id", questionController.deleteQuestion);

module.exports = router;
