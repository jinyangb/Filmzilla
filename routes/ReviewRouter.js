const router = require('express').Router()
const controller = require('../controllers/ReviewController')
const middleware = require('../middleware')

router.get('/', controller.GetReviews)
// router.post(
//   '/create-review',
//   middleware.stripToken,
//   middleware.verifyToken,
//   controller.CreateReview
// )
// router.put(
//   '/update-review/:review_id',
//   middleware.stripToken,
//   middleware.verifyToken,
//   controller.UpdateReview
// )
// router.delete(
//   '/delete-review/:review_id',
//   middleware.stripToken,
//   middleware.verifyToken,
//   controller.DeleteReview
// )

module.exports = router
