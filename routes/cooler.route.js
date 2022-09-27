const Router = require('express');
const router = Router();
const { coolerController } = require('../controllers/cooler.controller');

router.post('/cooler', coolerController.addCooler);
router.get('/coolers', coolerController.getCooler);
router.delete('/cooler/:id', coolerController.deleteCooler);

module.exports = router;