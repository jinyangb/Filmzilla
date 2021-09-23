import { Route, Switch, withRouter } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Home from './components/pages/Home'
import Movies from './components/pages/Movies'
import ProfilePage from './components/pages/ProfilePage'
import Register from './components/pages/Register'
import MainNavigation from './components/layout/MainNavigation'
import 'bootstrap/dist/css/bootstrap.min.css'
import { CheckSession } from './services/Auth'

function App(props) {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  const handleLogOut = () => {
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
    props.history.push(`/`)
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
        <Route exact path="/" component={(props) => <Home {...props} setUser={setUser} user={user ? user : ''} toggleAuthenticated={toggleAuthenticated} authenticated={authenticated}/>} />
        <Route path="/movies" exact>
          <Movies />
        </Route>
        <Route path="/profile-page" exact>
          <ProfilePage user={user ? user : ''}/>
        </Route>
        <Route path="/api/auth/register" component={Register} />
      </Switch>
    </div>
  )
}

export default withRouter(App)
