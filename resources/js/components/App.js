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
import Home from './Home';

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
