const router = require('express').Router()
const controller = require('../controllers/MovieController')
const middleware = require('../middleware')

router.get('/', controller.GetMovies)
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
