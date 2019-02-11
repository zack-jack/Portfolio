import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'normalize.css';

import './styles/main.scss';

import App from './components/App';
import Landing from './components/Landing';
import Details from './components/Details';
import Contact from './components/contact/Contact';
import Projects from './components/projects/Projects';
import NotFound from './components/NotFound';

ReactDOM.render(
  <Router>
    <App>
      <Switch>
        <Route
          path="/"
          exact
          render={() => (
            <div>
              <Landing />
              <Details />
            </div>
          )}
        />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />
        <Route component={NotFound} />
      </Switch>
    </App>
  </Router>,
  document.getElementById('root')
);
