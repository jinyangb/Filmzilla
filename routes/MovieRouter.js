const router = require('express').Router()
const controller = require('../controllers/MovieController')
const middleware = require('../middleware')

router.get('/movies', controller.GetMovies)
// router.get('/movies/:id', controller.GetMovieDetails)
// router.post(
//   '/',
//   // middleware.stripToken,
//   // middleware.verifyToken,
//   controller.CreateMovie
// )
// router.put(
//   '/:movie_id',
//   middleware.stripToken,
//   middleware.verifyToken,
//   controller.UpdateMovie
// )
// router.delete(
//   '/movies/:movie_id',
//   middleware.stripToken,
//   middleware.verifyToken,
//   controller.DeleteMovie
// )

module.exports = router
