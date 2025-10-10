var trainerRouter = require('express').Router();
var trainerController = require('../controller/trainerController');

trainerRouter.route('/')
    .post(trainerController.createTrainer)
    .get(trainerController.getAllTrainers);
trainerRouter.route('/:id')
    .get(trainerController.getTrainerById)
    .put(trainerController.updateTrainer)
    .delete(trainerController.deleteTrainer);


module.exports = trainerRouter;
