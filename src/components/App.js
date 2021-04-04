import "./styles.scss";
import React, { Component, lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// Code Splitting Using React Loadable
// import Loadable from "react-loadable";
// Loading Component Either For Code Splitting With React Loadable Or Suspense Fallback
import Loading from "./my-loading-component";
// Normal Import
// import Home from "./Home";
// import Movies from "./Movies";
// Using Lazy For Code Splitting
const Home = lazy(() => import("./Home"));
const Movies = lazy(() => import("./Movies/Movies"));

// const AsyncHome = Loadable({
//   loader: () => import("./Home"),
//   loading: Loading,
// });
// const AsyncMovies = Loadable({
//   loader: () => import("./Movies"),
//   loading: Loading,
// });

export default class App extends Component {
  render() {
    return (
      <Suspense fallback={<Loading />}>
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
                  {/* <AsyncHome /> */}
                  <Home />
                </Route>
                <Route path="/movies">
                  {/* <AsyncMovies /> */}
                  <Movies />
                </Route>
              </Switch>
            </main>
          </div>
        </Router>
      </Suspense>
    );
  }
}

if (module.hot) {
  module.hot.accept()
}
