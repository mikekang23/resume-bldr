import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Nav from './nav/index';
import CreateYourResume from './CreateYourResume'
import About from './About';
import Home from './Home';
import Signin from './Signin';
import Signout from './Signout';

class App extends React.Component {
  render(){
    return (
      <Router>
        <Nav></Nav>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/create-your-resume">
            <CreateYourResume />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/signin">
            <Signin />
          </Route>
          <Route path="/signout">
            <Signout />
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App;

ReactDOM.render(
  <App />,
  document.getElementById('merely-app')
);
