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
      <div className='reviews'>
        <Container>
          <h2 className="rev_head">Reviews</h2>
          {props.movieState.movies.map((movie) => (
            <ReviewCard
              key={movie._id}
              id={movie._id}
              rating={movie.rating}
              description={movie.description}
              // del_path={'remove-review'}
            />
          ))}
        </Container>
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);