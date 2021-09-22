import { Route, Switch, withRouter } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Home from './components/pages/Home'
import Movies from './components/pages/Movies'
import ProfilePage from './components/pages/ProfilePage'
import Register from './components/pages/Register'
import SignIn from './components/pages/SignIn'
import MainNavigation from './components/layout/MainNavigation'
import 'bootstrap/dist/css/bootstrap.min.css'
import ProtectedRoute from './components/ProtectedRoute'
import { CheckSession } from './services/Auth'

function App() {

  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  // const handleLogOut = () => {
  //   Reset all auth related state and clear localstorage
  //   setUser(null)
  //   toggleAuthenticated(false)
  //   localStorage.clear()
  // }

  const handleLogOut = () => {
    //Reset all auth related state and clear localstorage
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }

  const checkToken = async () => {
    const session = await CheckSession()
    setUser(session)
    toggleAuthenticated(true)
    localStorage.setItem('authenticated', '1')
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if(token){
      checkToken()
    }
  }, [])

  return (
    <div>
      <MainNavigation authenticated={authenticated} user={user} handleLogOut={handleLogOut} />
      <Switch>
        <Route path="/home" exact>
          <Home />
        </Route>
        <Route exact path="/" component={(props) => <SignIn {...props} setUser={setUser} toggleAuthenticated={toggleAuthenticated}/>} />
        <Route path="/movies" exact>
          <Movies />
        </Route>
        <Route path="/profile-page" exact>
          <ProfilePage />
        </Route>
        <Route path="/api/auth/register" component={Register} />
      </Switch>
    </div>
  )
}

export default withRouter(App)
