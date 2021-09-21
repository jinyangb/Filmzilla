const { GET_MOVIES, DEL_MOVIE } = require('../types')

const iState = {
  movies: []
}

const MovieReducer = (state = iState, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return { ...state, movies: action.payload }
    case DEL_MOVIE:
      return { ...state, movies: action.payload }
    default:
      return { ...state }
  }
}

export default MovieReducer