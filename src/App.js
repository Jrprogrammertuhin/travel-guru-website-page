import React, { useState, createContext } from 'react';
import './App.css';
import background from './components/image/Image/Rectangle 1.png'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navigation from './components/Navigation/Navigation';
import Destination from './components/Destination/Destination';
import NotFound from './components/NotFound/NotFound';
import Contact from './components/Contact/Contact';
import Data from './components/allCompFake/Data';
import Hotel from './components/Hotel/Hotel';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <div>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        {/* <h1>{loggedInUser.email}</h1> */}
        <Router>
          <Navigation loggedInUser={loggedInUser}></Navigation>
          <Switch>
            <Route path="/news">
              <Data></Data>
            </Route>
            <Route exact path="/destination">
              <Destination></Destination>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/login">
              <Login loggedInUser={loggedInUser}></Login>
            </Route>
            <PrivateRoute path="/hotel">
              <Hotel></Hotel>
            </PrivateRoute>
            <Route exact path="/">
              <Data></Data>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
