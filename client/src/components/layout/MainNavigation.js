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
            {props.authenticated ? <Nav.Link href="/home">Home</Nav.Link> : <Nav.Link href="/">Sign In</Nav.Link>} 
            {props.authenticated ? <Nav.Link href="/movies">Movies</Nav.Link> : <Nav.Link href="/api/auth/register">Register</Nav.Link>}
            {props.authenticated ? <Nav.Link href="/profile-page">Profile Page</Nav.Link> : null}
            {props.authenticated ? <Nav.Link onClick={props.handleLogOut} href="/">Logout</Nav.Link> : null}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

export default MainNavigation
