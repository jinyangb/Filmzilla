const router = require('express').Router()
const controller = require('../controllers/MovieController')
const middleware = require('../middleware')

<<<<<<< HEAD
// router.get('/', controller.GetMovies)
=======
router.get('/movies', controller.GetMovies)
// router.get('/movies/:id', controller.GetMovieDetails)
>>>>>>> 9e44ccad165b0482007c7dd7083c0e5ae7527017
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
//   '/:movie_id',
//   middleware.stripToken,
//   middleware.verifyToken,
//   controller.DeleteMovie
// )

module.exports = router
