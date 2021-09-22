import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

function MainNavigation(props) {
  return (
    <header>
      <Navbar bg="light" expand="sm">
        <Navbar.Brand>FilmZilla</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav>
            {props.user && props.authenticated ? (<Nav.Link href="/movies">Movies</Nav.Link>)
            (<Nav.Link href="/profile-page">Profile Page</Nav.Link>)
            (<Nav.Link href="/logout">Logout</Nav.Link>) 
            (<Nav.Link href="/home">Home</Nav.Link>) 
            : null }
            <Nav.Link href="/">Sign In</Nav.Link>
            <Nav.Link href="/api/auth/register">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

export default MainNavigation
