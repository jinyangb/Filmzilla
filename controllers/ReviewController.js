const { Reviews, Users, Movies, sequelize } = require('../models')

function stringify(data) {
  console.log(JSON.stringify(data, null, 2))
}
const GetReviews = async (req, res) => {
  try {
    const result = await Reviews.findAll({
      include: [
        {
          model: Users,
          as: 'user',
          attributes: ['username']
        },
        {
          model: Movies,
          as: 'movies',
          attributes: ['title']
        }
      ]
    })
    stringify(result)
    res.send(result)
  } catch (error) {
    throw error
  }
}

const CreateReview = async (req, res) => {
  try {
    const review = await Reviews.create({ ...req.body })
    res.send(review)
  } catch (error) {
    throw error
  }
}

const UpdateReview = async (req, res) => {
  try {
    const review = await Reviews.update(
      { ...req.body },
      { where: { id: req.params.review_id }, returning: true }
    )
    res.send(review)
  } catch (error) {
    throw error
  }
}

const DeleteReview = async (req, res) => {
  try {
    await Reviews.destroy({ where: { id: req.params.review_id } })
    res.send({
      msg: 'Review Deleted',
      payload: req.params.review_id,
      status: 'Ok'
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetReviews,
  CreateReview,
  UpdateReview,
  DeleteReview
}
