const Router = require('express');
const router = Router();
const { compController } = require('../controllers/comp.controller');

router.post('/comp', compController.addComp);
router.get('/comps', compController.getComp);
router.patch('/comp/:id', compController.updateComp);
router.delete('/comp/:id', compController.deleteComp);
router.patch('/countPlus/:id', compController.countPlus);
router.patch('/countMinus/:id', compController.countMinus);

module.exports = router;