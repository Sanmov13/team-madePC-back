const Router = require("express");
const router = Router();
const { commentController } = require("../controllers/comment.controller");

router.post("/comment", commentController.addComment);
router.get("/comment", commentController.getComment);
router.delete("/comment/:id", commentController.deleteComment);

module.exports = router;
