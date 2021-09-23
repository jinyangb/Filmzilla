import React from 'react'
import { BASE_URL } from '../globals'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Client from '../services'

function ReviewCard(props) {
  const deletePost = async (e) => {
    e.preventDefault()
    await Client.delete(`${BASE_URL}/${props.del_path}/${props.id}`)
    props.request ? props.changeIt(false) : props.changeIt(true)
  }

  return (
    <Card>
      <Card.Body>
        <p>Username: {props.user}</p>
        <p>Movie: {props.movies}</p>
        <p>Rating: {props.rating}</p>
        <p>Review: {props.description}</p>
        <Button variant="danger" onClick={deletePost}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  )
}

export default ReviewCard
