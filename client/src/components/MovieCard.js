import React from 'react'
import Card from 'react-bootstrap/Card'
import { POSTER_PATH } from '../globals'

function MovieCard(props) {

  return (
    <Card>
      <Card.Body>
        <p>Movie: {props.name}</p>
        <img src={`${POSTER_PATH}${props.backdrop_path}`} alt="poster" />
        <p>Overview: {props.overview}</p>
        <p>Genre: {props.genre}</p>
      </Card.Body>
    </Card>
  )
}

export default MovieCard
