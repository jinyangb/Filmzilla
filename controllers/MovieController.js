const { User, Reviews, Movies } = require('../models')
const { Op, literal, fn, col } = require('sequelize')

const GetMovies = async (req, res) => {
  try {
    const recents = await Movies.findAll({ order: [['created_at', 'DESC']] })
    res.send(recents)
  } catch (error) {
    throw error
  }
}

const GetMovieDetails = async (req, res) => {
  try {
    const movie = await Movies.findByPk(req.params.movie_id)
    res.send(movie)
  } catch (error) {
    throw error
  }
}

// const CreateMovie = async (req, res) => {
//   try {
//     let ownerId = parseInt(req.params.user_id)
//     let movieBody = {
//       ownerId,
//       ...req.body
//     }
//     let movie = await Movies.create(movieBody)
//     res.send(movie)
//   } catch (error) {
//     throw error
//   }
// }

// const UpdateMovie = async (req, res) => {
//   try {
//     let movieId = parseInt(req.params.movie_id)
//     let updatedMovie = await Movies.update(req.body, {
//       where: { id: movieId },
//       returning: true
//     })
//     res.send(updatedMovie)
//   } catch (error) {
//     throw error
//   }
// }

// const DeleteMovie = async (req, res) => {
//   try {
//     let movieId = parseInt(req.params.movie_id)
//     await Movies.destroy({ where: { id: movieId } })
//     res.send({ message: `Deleted movie with an id of ${movieId}` })
//   } catch (error) {
//     throw error
//   }
// }

module.exports = {
  GetMovies,
  GetMovieDetails
  // CreateMovie,
  // UpdateMovie,
  // DeleteMovie
}
