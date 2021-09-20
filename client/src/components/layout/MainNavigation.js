import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

function MainNavigation() {
  return (
    <header>
      <Navbar bg="light" expand="sm">
        <Navbar.Brand>FilmZilla</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/movies">Movies</Nav.Link>
            <Nav.Link href="/profile-page">Profile Page</Nav.Link>
            <Nav.Link href="/sign-in">Sign In</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
            <Nav.Link href="/logout">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

export default MainNavigation
