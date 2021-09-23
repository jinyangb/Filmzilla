import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import Container from 'react-bootstrap/Container'
import MovieCard from './MovieCard';

function MovieList() {

  const [movies, setMovies] = useState([])
  const [request, changeIt] = useState(false)

  const getMovies = async () => {
    const res = await axios.get(`${BASE_URL}/movies`)
    setMovies(res.data)
  }

  useEffect(() => {
    getMovies()
  }, [request])

  return (
    <div className='grid'>
      <div className='movies'>
        <Container>
          <h2 className="rev_head">Movies</h2>
          {movies.map(movie => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              name={movie.title}
              overview={movie.overview}
              genre={movie.genre}
            />
          ))}
        </Container>
      </div>
    </div>
  )
}

export default MovieList;