import React from 'react'
// import axios from 'axios'
// import { BASE_URL } from './globals'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { POSTER_PATH } from '../globals'

function MovieCard(props) {
  // const deletePost = async (e) => {
  //   e.preventDefault()
  //   await axios.delete(`${BASE_URL}/${props.del_path}/${props.id}`)
  //   props.request ? props.changeIt(false) : props.changeIt(true)
  // }

  return (
    <Card>
      <Card.Body>
        <p>Movie: {props.name}</p>
        <img src={`${POSTER_PATH}${props.backdrop_path}`} alt="poster" />
        <p>Overview: {props.overview}</p>
        <p>Genre: {props.genre}</p>
        <Button variant="danger" onClick={props.deleteMovie}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  )
}

export default MovieCard
