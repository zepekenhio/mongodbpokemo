var trainerRouter = require('express').Router();
var trainerController = require('../controller/trainerController');
var authMiddleware = require('../middleware/authMiddleware');

trainerRouter.route('/')
    .post(authMiddleware, trainerController.createTrainer)
    .get(authMiddleware, trainerController.getAllTrainers);
trainerRouter.route('/:id')
    .get(trainerController.getTrainerById)
    .put(authMiddleware, trainerController.updateTrainer)
    .delete(authMiddleware, trainerController.deleteTrainer);


module.exports = trainerRouter;
