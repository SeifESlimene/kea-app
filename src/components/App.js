import './styles.scss';
import { hot } from 'react-hot-loader/root';
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import loadable from '@loadable/component';

const Home = loadable(() => import('./Home'));
const Movies = loadable(() => import('./Movies/Movies'));
const Github = loadable(() => import('./Github/Github'));
const Sliders = loadable(() => import('./Sliders/Sliders'));

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
              <li>
                <Link to="/github">Github</Link>
              </li>
              <li>
                <Link to="/sliders">Sliders</Link>
              </li>
            </ul>
          </nav>
          <main>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/movies">
                <Movies />
              </Route>
              <Route path="/github">
                <Github />
              </Route>
              <Route path="/sliders">
                <Sliders />
              </Route>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default hot(App);
