import React, { useState } from 'react'
import ReviewList from '../ReviewList'

import Container from 'react-bootstrap/Container'
import SignIn from './SignIn'
import MyVerticallyCenteredModal from '../modal'
import { Button } from 'react-bootstrap'

function HomePage(props) {
  const [modalShow, setModalShow] = useState(false)

  return (
    <div>
      {props.authenticated ? (
        <div className="review-btn">
          <Container>
            <Button variant="primary" onClick={() => setModalShow(true)}>
              Create Review
            </Button>
          </Container>
        </div>
      ) : null}
      {props.authenticated ? (
        <ReviewList />
      ) : (
        <SignIn
          {...props}
          history={props.history}
          setUser={props.setUser}
          toggleAuthenticated={props.toggleAuthenticated}
          authenticated={props.authenticated}
        />
      )}

      <MyVerticallyCenteredModal
        user={props.user}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  )
}

export default HomePage
