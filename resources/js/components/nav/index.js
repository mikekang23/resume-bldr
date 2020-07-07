import React from 'react';
import ReactDOM from 'react-dom';

class Nav extends React.Component {
  render(){
    return (
      <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
        <h5 class="my-0 mr-md-auto font-weight-normal">Merely</h5>
        <nav class="my-2 my-md-0 mr-md-3">
          <a class="p-2 text-dark" href="#">About</a>
          <a class="p-2 text-dark" href="#">Create Resumé</a>
          <a class="p-2 text-dark" href="#">Sign In</a>
        </nav>
        <a class="btn btn-outline-primary" href="#">Sign up</a>
      </div>
    )
  }
}

export default Nav;
