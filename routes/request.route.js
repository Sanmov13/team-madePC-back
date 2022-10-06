const Router = require('express');
const router = Router();
const { reqcontroller } = require('../controllers/request.controller');

router.post('/request', reqcontroller.addRequest);
router.get('/requests', reqcontroller.getRequest);
router.delete('/request/:id', reqcontroller.deleteRequest);

router.post('/requestMade', reqcontroller.addRequestMade);
router.get('/requestsMade', reqcontroller.getRequestMade);
router.delete('/requestMade/:id', reqcontroller.deleteRequestMade);

module.exports = router;