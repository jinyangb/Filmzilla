import React, { useState } from 'react'
import MyVerticallyCenteredModal from '../modal'
import { Button } from 'react-bootstrap'
function Movies() {
  const [modalShow, setModalShow] = useState(false)
  return (
    <div>
      Movies
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Create Review
      </Button>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  )
}

export default Movies
