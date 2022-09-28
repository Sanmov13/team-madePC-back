const { Router } = require("express");
const { HDDController } = require("../controllers/HDD.controller");
const HDD = require("../models/HDD.model");
const router = Router();


router.get("/HDD", HDDController.getHDD)
router.post("/HDD", HDDController.addHDD)
router.delete('/HDD/:id', HDDController.deleteHDD)


module.exports = router