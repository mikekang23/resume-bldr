import React from 'react';
import ReactDOM from 'react-dom';
import {
  Link
} from "react-router-dom";

class Nav extends React.Component {
  render(){
    return (
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
        <h5 className="my-0 mr-md-auto font-weight-normal"><Link to="/">merely.io</Link></h5>
        <nav className="my-2 my-md-0 mr-md-3">
          <Link className="p-2 text-dark" to="/about">About</Link>
          <Link className="p-2 text-dark" to="/create-your-resume">Create Your Resumé</Link>
          <Link className="p-2 text-dark" to="/login">Sign In</Link>
        </nav>
        <Link className="btn btn-outline-primary" to="/register">Sign up</Link>
      </div>
    )
  }
}

export default Nav;
