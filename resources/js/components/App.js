import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './nav/index';

class App extends React.Component {
  render(){
    return (
      <main role="main">
        <Nav></Nav>
        <div className="jumbotron text-center">
          <div className="container col-md-6">
            <h1 className="jumbotron-heading">Less is More.</h1>
            <p className="lead text-muted">The average recruiter spends just 6 seconds on scanning your resumé. Let's keep it simple, informative, and interactive.</p>
          <a href="/create-your-resume" className="btn btn-primary">Build Your Resumé</a>

          </div>
        </div>
      </main>
    )
  }
}

export default App;

ReactDOM.render(
  <App />,
  document.getElementById('merely-app')
);
