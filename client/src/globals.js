export const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? `${window.location.origin}/api`
    : 'http://localhost:3001/api'

export const axiosConfig = {
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_TMDB_KEY}`
  }
}

export const BASE_URL_MOVIE = 'https://api.themoviedb.org/3'

export const POSTER_PATH = 'https://image.tmdb.org/t/p/original'
export const API_KEY = process.env.REACT_APP_TMDB_KEY
