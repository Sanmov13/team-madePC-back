const Router = require('express');
const router = Router();
const {ssdController} = require("../controllers/ssd.controller")

router.post('/ssd', ssdController.addSsd);
router.get('/ssd', ssdController.getSsd);
router.delete('/ssd/:id', ssdController.deleteSsd);

module.exports = router;