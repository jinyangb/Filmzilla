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

  const checkToken = async () => {
    const session = await CheckSession()
    setUser(session)
    toggleAuthenticated(true)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    console.log(token)
    if(token){
      checkToken()
    }
  }, [])

  return (
    <div>
      <MainNavigation />
      <Switch>
        {user && authenticated && (
          <ProtectedRoute
            authenticated={authenticated}
            user={user}
            path='/home'
            component={Home}
          />
        )}
        <Route exact path="/" component={(props) => <SignIn {...props} setUser={setUser} toggleAuthenticated={toggleAuthenticated}/>} />
        <Route path="/movies" exact>
          <Movies />
        </Route>
        <Route path="/profile-page" exact>
          <ProfilePage />
        </Route>
        <Route path="/register" component={Register} />
        
      </Switch>
    </div>
  )
}

export default withRouter(App)
