import React from 'react';

class App extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <main>
          <div className="jumbotron">
            <h1>My Forums</h1>
            <p>This is a repository for forums</p>
            <p><a className="btn btn-primary btn-lg" href="#" role="button">Create New Forum</a></p>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <div className="panel panel-primary">
                <div className="panel-heading">
                  <h3 className="panel-title">Apple Core</h3>
                </div>
                <div className="panel-body">
                  All things Apple
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="panel panel-primary">
                <div className="panel-heading">
                  <h3 className="panel-title">Apps & Software</h3>
                </div>
                <div className="panel-body">
                  Programs and programs
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="panel panel-primary">
                <div className="panel-heading">
                  <h3 className="panel-title">
                    <a href="#">Betamaxed</a>
                  </h3>
                </div>
                <div className="panel-body">
                  Home theater and beyond
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="panel panel-primary">
                <div className="panel-heading">
                  <h3 className="panel-title">Events</h3>
                </div>
                <div className="panel-body">
                  For all events discussion
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="panel panel-primary">
                <div className="panel-heading">
                  <h3 className="panel-title">Gaming</h3>
                </div>
                <div className="panel-body">
                  Achievement unlocked?
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="panel panel-primary">
                <div className="panel-heading">
                  <h3 className="panel-title">Hacks / DIY</h3>
                </div>
                <div className="panel-body">
                  Get your hands dirty
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
