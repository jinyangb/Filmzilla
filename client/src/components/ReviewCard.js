import React, { useState } from 'react'
import { BASE_URL } from '../globals'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Client from '../services'
import ModalGen from './ModalGen'

function ReviewCard(props) {
<<<<<<< HEAD
=======

  const [genModalShow, setGenModalShow] = useState(false)

>>>>>>> d0084df1f2048b406eaf431bbdc069e685a8e26d
  const deletePost = async (e) => {
    // e.preventDefault()
    await Client.delete(`${BASE_URL}/${props.del_path}/${props.id}`)
    props.request ? props.changeIt(false) : props.changeIt(true)
  }

  return (
    <div>
    <Card>
      <Card.Body>
        <p>Username: {props.user}</p>
        <p>Movie: {props.movies}</p>
        <p>Rating: {props.rating}</p>
        <p>Review: {props.description}</p>
<<<<<<< HEAD
        <Button variant="danger" onClick={deletePost}>
          Delete
        </Button>
=======
        <Button variant="danger" onClick={() => setGenModalShow(true)}>Delete</Button>
>>>>>>> d0084df1f2048b406eaf431bbdc069e685a8e26d
      </Card.Body>
    </Card>
    <ModalGen action={'delete this post'} function={() => deletePost()} buttonText={'Delete'} show={genModalShow} onHide={() => setGenModalShow(false)} />
    </div>
  )
}

export default ReviewCard
