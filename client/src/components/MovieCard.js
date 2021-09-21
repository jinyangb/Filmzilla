import React from 'react'
// import axios from 'axios'
// import { BASE_URL } from './globals'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

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
        <p>Overview: {props.overview}</p>
        <p>Genre: {props.genre}</p> 
        <Button variant="danger" onClick={props.deleteMovie}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  )
}

export default MovieCard;