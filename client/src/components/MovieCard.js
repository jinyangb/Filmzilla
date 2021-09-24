import React from 'react'
import { POSTER_PATH } from '../globals'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../index.css'

function MovieCard(props) {
  return (
    <div className="MovieCard">
      <div className="postercontainer">
        <img
          className="poster"
          src={`${POSTER_PATH}${props.backdrop_path}`}
          alt="Poster"
        />
      </div>
      <div className="text">
        <h2>{props.name}</h2>
        <p>{props.overview}</p>
      </div>
    </div>
  )
}

export default MovieCard
