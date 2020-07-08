import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Home extends React.Component {
  render(){
    return (
      <div>
        <div className="jumbotron text-center">
          <div className="container col-md-6">
            <h1 className="jumbotron-heading">Less is More.</h1>
          <p className="lead text-muted">The average recruiter spends just 6 seconds scanning your resumé.<br/>Simple, elegant, and interactive resumés.</p>
          <Link to="/create-your-resume" className="btn btn-primary">Build Your Resumé</Link>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-md-7">
              asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf
            </div>
            <div className="col-md-3">
              asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
