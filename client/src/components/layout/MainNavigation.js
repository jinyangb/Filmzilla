import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import React, { useState } from 'react'
import ModalGen from '../ModalGen'

function MainNavigation(props) {
  const [genModalShow, setGenModalShow] = useState(false)

  return (
    <header>
      <Navbar bg="light" expand="sm">
        <Navbar.Brand>FilmZilla</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav>
            {props.authenticated ? (
              <Nav.Link href="/">Home</Nav.Link>
            ) : (
              <Nav.Link href="/">Sign In</Nav.Link>
            )}
            {props.authenticated ? (
              <Nav.Link href="/movies">Movies</Nav.Link>
            ) : (
              <Nav.Link href="/api/auth/register">Register</Nav.Link>
            )}
            {/* {props.authenticated ? <Nav.Link href="/profile-page">Profile Page</Nav.Link> : null} */}
            {props.authenticated ? (
              <Nav.Link>
                <div onClick={() => setGenModalShow(true)}>Logout</div>
              </Nav.Link>
            ) : null}
            <ModalGen
              action={'logout'}
              function={props.handleLogOut}
              buttonText={'Logout'}
              show={genModalShow}
              onHide={() => setGenModalShow(false)}
            />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

export default MainNavigation
