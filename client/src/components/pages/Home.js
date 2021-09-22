import React from 'react'
import ReviewList from '../ReviewList';
import MovieList from '../MovieList';
import SignIn from './SignIn'

function HomePage(props) {
  return (
    <div>
      {props.authenticated ? <ReviewList /> : <SignIn {...props} history={props.history} setUser={props.setUser} toggleAuthenticated={props.toggleAuthenticated} authenticated={props.authenticated}/>} 
      {props.authenticated ? <MovieList /> : null}
    </div>
  )
}

export default HomePage;