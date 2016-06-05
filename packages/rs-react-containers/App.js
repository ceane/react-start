import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Header from './Header';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div>
      <Link to='main'>To Main</Link>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    )
  }
};

export default App;
