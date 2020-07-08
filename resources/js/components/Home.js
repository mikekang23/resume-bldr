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
      <div className="jumbotron text-center">
        <div className="container col-md-6">
          <h1 className="jumbotron-heading">Less is More.</h1>
          <p className="lead text-muted">The average recruiter spends just 6 seconds on scanning your resumé. Let's keep it simple, informative, and interactive.</p>
        <Link to="/create-your-resume" className="btn btn-primary">Build Your Resumé</Link>
        </div>
      </div>
    )
  }
}

export default Home;
