const Router = require('express');
const router = Router();
const { gamesController } = require('../controllers/game.controller');

router.post('/game', gamesController.addGames);
router.get('/game', gamesController.getGames);
router.delete('/game/:id', gamesController.deleteGames);

module.exports = router;