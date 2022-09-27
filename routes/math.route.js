const { Router } = require("express");
const router = Router();
const { math } = require("../controllers/math.controller");

router.get("/math", math.getMath);
router.post("/math", math.addMath);
router.patch("/math/:id", math.updateMath);
router.delete("/math/:id", math.deleteMath);

module.exports = router;
