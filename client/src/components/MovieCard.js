import React from 'react'
import { POSTER_PATH } from '../globals'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../index.css'
import { Card, Button } from 'react-bootstrap'

function MovieCard(props) {
  return (
    <div>
      {/* <div className="postercontainer">
        <img
          className="poster"
          src={`${POSTER_PATH}${props.backdrop_path}`}
          alt="Poster"
        />
        <h2>{props.name}</h2>
        <p>{props.overview}</p>
      </div> */}
      {/* <div className="text"></div> */}

      <Card size="sm" className="PosterCard" active>
        <Card.Img
          className="posters"
          src={`${POSTER_PATH}${props.backdrop_path}`}
          alt={props.movie}
        />
        <Card.ImgOverlay>
          <Card.Title size="lg">{props.movie}</Card.Title>
          <Card.Text>{props.overview}</Card.Text>
        </Card.ImgOverlay>
      </Card>
    </div>
  )
}

export default MovieCard
