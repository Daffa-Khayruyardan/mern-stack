const express = require('express');

// import controller
const userController = require('../controller/userController');

const router = express.Router();

router.get('/profile/:id', userController.getProfile);
router.post('/register', userController.register);
router.patch('/updateUser/:id', userController.update);
router.post('/login', userController.login);
router.delete('/deleteUser/:id', userController.deleteUser);

module.exports = router;