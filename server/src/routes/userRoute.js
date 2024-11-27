const express = require('express');

// import controller
const userController = require('../controller/userController');

const router = express.Router();

router.post('/register', userController.register);
router.post('/login', userController.login);

module.exports = router;