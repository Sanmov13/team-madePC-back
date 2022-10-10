const Router = require('express');
const router = Router();
const { userController } = require('../controllers/user.controller')

router.post('/user', userController.registerUser);
router.post('/login', userController.login);
router.patch('/addToBasket/:id', userController.addInBasket);
router.patch('/addToMadeBasket/:id', userController.addInMadeBasket)
router.patch('/deleteFromBasket/:id', userController.removeFromBasket);
router.patch('/deleteFromMadeBasket/:id', userController.removeFromMadebasket);
router.get('/users', userController.getUser);

module.exports = router;