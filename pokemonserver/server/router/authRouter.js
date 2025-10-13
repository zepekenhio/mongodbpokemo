var authRouter = require('express').Router();
var authController = require('../controller/authController');

authRouter.post('/register', authController.register);
authRouter.post('/login', authController.login);

module.exports = authRouter;
