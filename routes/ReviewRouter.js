const { Router } = require('express')
const router = Router()

const cors = require('cors')
const controller = require('../controllers/ReviewController')
const middleware = require('../middleware')

<<<<<<< HEAD
=======
router.use(cors())

>>>>>>> 501cf959a5570bc5d40463a9289e7eb0c06bf1d5
router.get('/reviews', controller.GetReviews)
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
