var express = require('express');
var moviesController = require('./../controllers/moviesController');

var moviesRouter = express.Router();

moviesRouter.route('')
  .get(moviesController.get)
  .post(moviesController.add)
  .delete(moviesController.del);

moviesRouter.route('/:id')
  .get(moviesController.getById)
  .put(moviesController.update)
  .patch(moviesController.patch);

module.exports = moviesRouter;
