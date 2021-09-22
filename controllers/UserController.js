const { Users, Reviews, Movies } = require('../models')

const GetProfiles = async (req, res) => {
  try {
    const users = await Users.findAll()
    res.send(users)
  } catch (error) {
    throw error
  }
}

const GetUserProfile = async (req, res) => {
  try {
    const userAndReviews = await Users.findByPk(req.params.user_id, {
      attributes: ['username', 'email'],
      include: [
        {
          model: Reviews,
          include: {
            model: Movies,
            as: 'movies',
            attributes: ['title']
          },
          as: 'reviews'
        }
      ]
    })
    res.send(userAndReviews)
  } catch (error) {
    throw error
  }
}

const CreateUser = async (req, res) => {
  try {
    const newUser = await Users.create(req.body)
    res.send(newUser)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetProfiles,
  GetUserProfile,
  CreateUser
}
