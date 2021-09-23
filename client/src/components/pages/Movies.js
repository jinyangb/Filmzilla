import {
  axiosConfig,
  BASE_URL_MOVIE,
  API_KEY,
  POSTER_PATH
} from '../../globals'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MovieCard from '../MovieCard'
import Search from '../Search'

export default function Movie(props) {
  const [movies, setMovies] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [searched, toggleSearched] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const getSearchResults = async (e) => {
    e.preventDefault()
    const res = await axios.get(
      `${BASE_URL_MOVIE}/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
    console.log(res)
    setSearchResults(res.data.results)
    setSearchQuery('')
    toggleSearched(searched === true)
  }

  const handleChange = (event) => {
    setSearchQuery(event.target.value)
  }

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
      <Search onChange={handleChange} onSubmit={getSearchResults} />
      <div>
        <h2>Search Results</h2>
        <section>
          {searchResults.length > 0}
          {searchResults.map((searchResult) => (
            <MovieCard key={searchResult.id} {...searchResult} />
          ))}
        </section>
      </div>

      <div>
        <h2>Movies</h2>
        <section>
          {movies.map((movie) => (
            <MovieCard
              name={movie.title}
              backdrop_path={movie.poster_path}
              overview={movie.overview}
              genre={movie.genre}
            />
          ))}
        </section>
      </div>
    </div>
  )
}
