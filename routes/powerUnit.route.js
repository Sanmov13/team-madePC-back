const Router = require('express');
const router = Router();
const {powerUnitController} = require("../controllers/powerUnit.controller")

router.post('/powerunit', powerUnitController.addPowerUnit);
router.get('/powerunit',powerUnitController.getPowerUnit);
router.delete('/powerunit/:id', powerUnitController.deletePowerUnit);

module.exports = router;