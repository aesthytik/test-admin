import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import User from '../components/User';
import Home from './Home';
import Profile from "../components/Profile";
import Cattle from "../components/Cattle";
import Categories from "../components/Categories";
import Login from '../components/Login';
import PrivateRoute from '../utils/PrivateRoute';
import AuthContext from '../utils/AuthContext';


// import Users from './Users'

const App = () => {
  const { isLoggedIn } = React.useContext(AuthContext);

  return(
    <React.Fragment>
        <BrowserRouter>
          <Switch>
          <PrivateRoute
            exact
            path="/"
            component={Login}
            authenticated={isLoggedIn}
        />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/dashboard" component={Home} />
            <Route exact path="/collections" component={Cattle} />
            <Route exact path="/user" component={User} />
            <Route exact path="/categories" component={Categories} />
            
          </Switch>
        </BrowserRouter>
      </React.Fragment>
  )
}


export default App