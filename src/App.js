import React, { Component } from "react";
import UploaderView from "./Uploader";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import logo from "./logo.svg";
import "./App.css";
class Home extends Component {
  render() {
    return <div>welcome</div>;
  }
}
class App extends Component {
  render() {
    return (
      <Router>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3 col-xl-2">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/uploader/uploader1/123">UploaderView1/123</Link>
                </li>
                <li>
                  <Link to="/uploader/uploader1/456">UploaderView1/456</Link>
                </li>
                <li>
                  <Link to="/uploader/uploader3">UploaderView3</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-7 col-xl-8">
              <Route exact path="/" component={Home} />
              <Route path="/uploader" component={UploaderView} />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
