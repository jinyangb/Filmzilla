import { BASE_URL_MOVIE } from '../../globals'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MovieCard from '../MovieCard'
import Search from '../Search'
import Card from 'react-bootstrap/Card'

export default function Movie(props) {
  const [movies, setMovies] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [searched, toggleSearched] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const getMovies = async () => {
    const res = await axios.get(
      `${BASE_URL_MOVIE}/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
    setMovies(res.data.results)
  }

  const getSearchResults = async (e) => {
    e.preventDefault()
    const res = await axios.get(
      `${BASE_URL_MOVIE}/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&query=${searchQuery}`
    )
    setSearchResults(res.data.results)
    toggleSearched(searched === true)
    setSearchQuery('')
  }

  const handleChange = (event) => {
    setSearchQuery(event.target.value)
  }

  useEffect(() => {
    getMovies()
  }, [])

  return (
    <div>
      <Search
        onChange={handleChange}
        onSubmit={getSearchResults}
        value={searchQuery}
      />
      <div>
        {/* <h2>Search Results</h2> */}
        <section>
          {searchResults.length > 0}
          {searchResults.map((searchResult) => (
            <MovieCard
              key={searchResult.id}
              {...searchResult}
              name={searchResult.title}
              overview={searchResult.overview}
            />
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
              // genre={movie.genre}
            />
          ))}
        </section>
      </div>
    </div>
  )
}
