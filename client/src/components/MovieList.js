import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Container from 'react-bootstrap/Container'
import MovieCard from './MovieCard';
import { LoadMovies } from '../store/actions/MovieActions'

const mapStateToProps = ({ movieState }) => {
  return { movieState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovies: () => dispatch(LoadMovies())
  }
}

function MovieList(props) {

  useEffect(() => {
    props.fetchMovies()
  }, [])

  return (
    <div className='grid'>
      <div className='movies'>
        <Container>
          <h2 className="rev_head">Movies</h2>
          {props.movieState.movies.map((movie) => (
            <MovieCard
              key={movie._id}
              id={movie._id}
              name={movie.title}
              overview={movie.overview}
              genre={movie.genre}
              // del_path={'remove-review'}
            />
          ))}
        </Container>
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);