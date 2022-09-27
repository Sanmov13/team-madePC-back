const Router = require('express');
const router = Router();
const { processorController } = require('../controllers/processor.controller')

router.post('/processor', processorController.addProcessor);
router.get('/processors', processorController.getProcessors);
router.delete('/processor/:id', processorController.deleteProcessor);

module.exports = router;