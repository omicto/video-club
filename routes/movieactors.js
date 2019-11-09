const express = require('express');
const router = express.Router();
const movieActorsController = require('../controllers/moviesActors/moviesActorsController');

router.get('/actors/:actorId/movies', movieActorsController.actorsFromMovie);
router.get('/movies/:movieId/actors', movieActorsController.actorsFromMovie);
router.post('/moviesactors/:movieId/:actorId', movieActorsController.insertMovieActors);


module.exports = router;


