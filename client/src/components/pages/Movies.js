import {
  axiosConfig,
  BASE_URL_MOVIE,
  API_KEY,
  POSTER_PATH
} from '../../globals'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MovieCard from '../MovieCard'

export default function Movie(props) {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    async function getMovies() {
      const res = await axios.get(
        `${BASE_URL_MOVIE}/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}`
      )

      setMovies(res.data.results)
    }
    getMovies()
  }, [])

  console.log('movies', movies)

  return (
    <div>
      <h2>Movies</h2>
      <section>
        {movies.map((movie) => (
          <MovieCard
            name={movie.name}
            image={
              <img src={`${POSTER_PATH}${movie.backdrop_path}`} alt="poster" />
            }
            overview={movie.overview}
            genre={movie.genre}
          />
        ))}
      </section>
    </div>
  )
}
