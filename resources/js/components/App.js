import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './nav/index';

class App extends React.Component {
  render(){
    return (
      <div>
        <Nav></Nav>
        <div className="container">
          <div className="row justify-content-center">Your Resumés, Done Conversationally.</div>
        <br/>
            <div className="row justify-content-center">

                <div className="col-md-4">
                  Merely
                </div>
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Example Component</div>

                        <div className="card-body">I'm an example component!</div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default App;

ReactDOM.render(
  <App />,
  document.getElementById('merely-app')
);
