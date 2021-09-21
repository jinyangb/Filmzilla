import { GetReviews } from '../../services/ReviewService'
import { GET_REVIEWS } from '../types'

export const LoadReviews = () => {
  return async (dispatch) => {
    try {
      const reviews = await GetReviews()
      dispatch({
        type: GET_REVIEWS,
        payload: reviews
      })
    } catch (error) {
      throw error
    }
  }
}