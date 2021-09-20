import { Route, Switch, withRouter} from 'react-router-dom';
import Home from './components/pages/Home';
import Movies from './components/pages/Movies';
import ProfilePage from './components/pages/ProfilePage';
import MainNavigation from './components/layout/MainNavigation';

function App() {
  return (
    <div>
      <MainNavigation />
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/movies' exact>
          <Movies />
        </Route>
        <Route path='/profile-page' exact>
          <ProfilePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
