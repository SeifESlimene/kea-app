import { hot } from 'react-hot-loader/root';
import './styles.scss';
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import loadable from '@loadable/component';

const Home = loadable(() => import('./Home'));
const Movies = loadable(() => import('./Movies/Movies'));
const Github = loadable(() => import('./Github/Github'));
const Sliders = loadable(() => import('./Sliders/Sliders'));
const Counter = loadable(() => import('./Counter/Counter'));
const Forms = loadable(() => import('./Forms/Forms'));
const Three = loadable(() => import('./Three/Three.js'));
const Test = loadable(() => import('./Test/Test'));

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
              {/* <li>
                <Link to="/movies">Movies</Link>
              </li> */}
              <li>
                <Link to="/github">Github</Link>
              </li>
              <li>
                <Link to="/sliders">Sliders</Link>
              </li>
              <li>
                <Link to="/counter">Counter</Link>
              </li>
              <li>
                <Link to="/forms">Forms</Link>
              </li>
              <li>
                <Link to="/three">Three</Link>
              </li>
              {/* <li>
                <Link to="/test">Test</Link>
              </li> */}
            </ul>
          </nav>
          <main
          style={{'height':  'calc(100vh - 50px)'}}
          >
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              {/* <Route path="/movies">
                <Movies />
              </Route> */}
              <Route path="/github">
                <Github />
              </Route>
              <Route path="/sliders">
                <Sliders />
              </Route>
              <Route path="/counter">
                <Counter />
              </Route>
              <Route path="/forms">
                <Forms />
              </Route>
              <Route path="/three">
                <Three />
              </Route>
              {/* <Route path="/test">
                <Test />
              </Route> */}
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default hot(App);
