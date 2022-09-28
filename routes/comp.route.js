const Router = require('express');
const router = Router();
const { compController } = require('../controllers/comp.controller');

router.post('/comp', compController.addComp);
router.get('/comps', compController.getComp);
router.patch('/comp/:id', compController.updateComp);
router.delete('/comp/:id', compController.deleteComp);

module.exports = router;