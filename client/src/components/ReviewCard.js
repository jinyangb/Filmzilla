import React, { useState } from 'react'
import { BASE_URL } from '../globals'

import Button from 'react-bootstrap/Button'
import Client from '../services'
import ModalGen from './ModalGen'
import UpdateModal from './UpdateModal'

function ReviewCard(props) {
  const [genModalShow, setGenModalShow] = useState(false)
  const [updatemodalShow, setUpdateModalShow] = useState(false)

  const deletePost = async (e) => {
    await Client.delete(`${BASE_URL}/${props.del_path}/${props.id}`)
    props.request ? props.changeIt(false) : props.changeIt(true)
  }

  return (
    <div>
      <section className="MovieGrid">
        <div className="MovieCard">
          <img src={props.poster} alt={props.movie} />
          <h2>{props.movie}</h2>
          <h3>Reviewed By: {props.user}</h3>
          <p>Review: {props.description}</p>
          <p>Rating: {props.rating}</p>

          <Button variant="danger" onClick={() => setGenModalShow(true)}>
            Delete
          </Button>
          <Button variant="primary" onClick={() => setUpdateModalShow(true)}>
            Update Review
          </Button>
        </div>
      </section>

      <ModalGen
        action={'delete this post'}
        function={() => deletePost()}
        buttonText={'Delete'}
        show={genModalShow}
        onHide={() => setGenModalShow(false)}
      />
      <UpdateModal
        show={updatemodalShow}
        onHide={() => setUpdateModalShow(false)}
        description={props.description}
        id={props.id}
        user={props.user}
        movie={props.movie}
      />
    </div>
  )
}

export default ReviewCard
