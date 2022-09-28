const { Router } = require("express");
const { RAMController } = require("../controllers/RAM.controller");

const router = Router();

router.get("/RAM", RAMController.getRAM);
router.post("/RAM", RAMController.addRAM);
router.delete("/RAM/:id", RAMController.deleteRAM);


module.exports = router;