const router = require('express').Router()
const controller = require('../controllers/MovieController')
const middleware = require('../middleware')

router.get('/movies', controller.GetMovies)
// router.get('/movie-details/:id', controller.GetMovieDetails)
router.post(
  '/create-movie',
  // middleware.stripToken,
  // middleware.verifyToken,
  controller.CreateMovie
)

router.get('/movies-details/:movie_id', controller.GetMovieDetails)
router.put(
  '/update-movie/:movie_id',
  // middleware.stripToken,
  // middleware.verifyToken,
  controller.UpdateMovie
)
router.delete(
  '/delete-movie/:movie_id',
  // middleware.stripToken,
  // middleware.verifyToken,
  controller.DeleteMovie
)

module.exports = router
