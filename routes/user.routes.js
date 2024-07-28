const Router = require('express');
const router = new Router();
const userController = require('../controller/user.controller');

router.get('/users', userController.getUsers);
router.post('/user', userController.createUser);
router.get('/user/:id', userController.getUser);
router.delete('/user/:id', userController.deleteUser);
router.put('/user', userController.updateUser);

module.exports = router;
