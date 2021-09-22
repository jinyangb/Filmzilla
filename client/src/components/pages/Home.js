import React, { useState } from 'react'
import ReviewList from '../ReviewList';
import MovieList from '../MovieList';
import SignIn from './SignIn'
import MyVerticallyCenteredModal from '../modal'
import { Button } from 'react-bootstrap'

function HomePage(props) {
  const [modalShow, setModalShow] = useState(false)
  return (
    <div>
      {props.authenticated ? <ReviewList /> : <SignIn {...props} history={props.history} setUser={props.setUser} toggleAuthenticated={props.toggleAuthenticated} authenticated={props.authenticated}/>} 
      {props.authenticated ? <MovieList /> : null}
      {props.authenticated ? <Button variant="primary" onClick={() => setModalShow(true)}>Create Review</Button> <MyVerticallyCenteredModalshow={modalShow} onHide={() => setModalShow(false)} /> : null}
    </div>
  )
}
              
export default HomePage
