const { GET_REVIEWS } = require('../types')

const iState = {
  reviews: []
}

const ReviewReducer = (state = iState, action) => {
  switch (action.type) {
    case GET_REVIEWS:
      return { ...state, reviews: action.payload }
    default:
      return { ...state }
  }
}

export default ReviewReducer