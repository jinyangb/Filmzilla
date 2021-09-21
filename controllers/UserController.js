// const User = require('../models/user')
// const Review = require('../models/review')

// const GetProfiles = async (req, res) => {
//   try {
//     const users = await User.findAll()
//     res.send(users)
//   } catch (error) {
//     throw error
//   }
// }

// const GetUserProfile = async (req, res) => {
//   try {
//     const userAndReviews = await User.findByPk(req.params.user_id, {
//       include: [{ model: Review }]
//     })
//     res.send(userAndReviews)
//   } catch (error) {
//     throw error
//   }
// }
// const CreateUser = async (req, res) => {
//   try {
//     const newUser = await User.create(req.body)
//     res.send(newUser)
//   } catch (error) {
//     throw error
//   }
// }

// module.exports = {
//   GetProfiles,
//   GetUserProfile,
//   CreateUser
// }
