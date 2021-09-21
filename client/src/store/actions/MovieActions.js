import { GetMovies, DelMovie } from '../../services/MovieService'
import { GET_MOVIES, DEL_MOVIE } from '../types'

export const LoadMovies = () => {
  return async (dispatch) => {
    try {
      const movies = await GetMovies()
      dispatch({
        type: GET_MOVIES,
        payload: movies
      })
    } catch (error) {
      throw error
    }
  }
}

export const RemoveMovie = () => {
  return async (dispatch) => {
    try {
      const movies = await DelMovie()
      dispatch({
        type: DEL_MOVIE,
        payload: movies
      })
    } catch (error) {
      throw error
    }
  }
}