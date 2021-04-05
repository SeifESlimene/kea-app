import "./styles.scss";
import { hot } from "react-hot-loader/root";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// Loadable Components
import loadable from "@loadable/component";

// Loadable Components
const AsyncHome = loadable(() => import("./Home"));
const AsyncMovies = loadable(() => import("./Movies/Movies"));

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/movies">Movies</Link>
              </li>
            </ul>
          </nav>
          <main>
            <Switch>
              <Route exact path="/">
                <AsyncHome />
              </Route>
              <Route path="/movies">
                <AsyncMovies />
              </Route>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default hot(App);
