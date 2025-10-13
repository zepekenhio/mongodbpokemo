var zoneRouter = require('express').Router();
var zoneController = require('../controller/zoneController');
var authMiddleware = require('../middleware/authMiddleware');

zoneRouter.route('/')
    .post(authMiddleware, zoneController.createZone)
    .get(authMiddleware, zoneController.getAllZones);

zoneRouter.route('/:id')
    .get(zoneController.getZoneById)
    .put(authMiddleware, zoneController.updateZone)
    .delete(authMiddleware, zoneController.deleteZone);

module.exports = zoneRouter;