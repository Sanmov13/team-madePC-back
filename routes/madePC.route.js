const Router = require('express');
const router = Router();
const { madePC } = require('../controllers/madePC.controller');

router.post('/madeComp', madePC.addMadePC);
router.get('/madeComps', madePC.getMadePC);
router.get('/oneMPC', madePC.getOneMPC);
router.patch('/madeComp/:id', madePC.updateMadePC);
router.patch('/mPC', madePC.mPCupdate)
router.delete('/madeComp/:id', madePC.deleteMadePC);


module.exports = router;