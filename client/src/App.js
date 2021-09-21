import { Route, Switch, withRouter } from 'react-router-dom'
import Home from './components/pages/Home'
import Movies from './components/pages/Movies'
import ProfilePage from './components/pages/ProfilePage'
import Register from './components/pages/Register'
import SignIn from './components/pages/SignIn'
import MainNavigation from './components/layout/MainNavigation'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div>
      <MainNavigation />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/movies" exact>
          <Movies />
        </Route>
        <Route path="/profile-page" exact>
          <ProfilePage />
        </Route>
        <Route path="/register" exact>
          <Register />
        </Route>
        <Route path="/sign-in" exact>
          <SignIn />
        </Route>
      </Switch>
    </div>
  )
}

export default withRouter(App)
