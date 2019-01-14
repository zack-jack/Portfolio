import React, { Component } from 'react';

import Header from './Header';
import Landing from './Landing';
import Details from './Details';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Landing />
        <Details />
        <Footer />
      </div>
    );
  }
}

export default App;
