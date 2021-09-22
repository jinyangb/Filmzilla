import React, { useState } from 'react'
import ReviewList from '../ReviewList'
import MovieList from '../MovieList'
import MyVerticallyCenteredModal from '../modal'
import { Button } from 'react-bootstrap'

function HomePage() {
  const [modalShow, setModalShow] = useState(false)
  return (
    <div>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Create Review
      </Button>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <ReviewList />
      <MovieList />
    </div>
  )
}

export default HomePage
