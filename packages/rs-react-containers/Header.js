import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class Header extends Component {
  render() {
    return (
      <div style={{marginBottom: '40px'}}>
        <h1>ToDo List</h1>
        <nav>
          <Link to='todo'>Todo List</Link>
        </nav>
      </div>
    )
  }
};

export default Header;
