const Router = require('express');
const router = Router();
const { corpusController } = require('../controllers/corpus.controller');

router.post('/corpus', corpusController.addCorpus);
router.get('/corpus', corpusController.getCorpus);
router.delete('/corpus/:id', corpusController.deleteCorpus);

module.exports = router;