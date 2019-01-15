import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import 'normalize.css';

import './styles/main.scss';

import App from './components/App';
import Landing from './components/Landing';
import Details from './components/Details';
import Contact from './components/contact/Contact';
import Projects from './components/projects/Projects';

ReactDOM.render(
  <Router>
    <App>
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
    </App>
  </Router>,
  document.getElementById('root')
);
