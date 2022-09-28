const Router = require('express');
const router = Router();
const {videoCardController} = require("../controllers/videoCard.controller")

router.post('/videocards', videoCardController.addVideoCard);
router.get('/videocards',videoCardController.getVideoCard);
router.delete('/videocards/:id', videoCardController.deleteVideoCard);

module.exports = router;