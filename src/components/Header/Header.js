import React from 'react';
import { Link } from 'react-router';
import styles from './Header.scss';

const Header = React.createClass({
  render() {
    return (
      <header>
        <Link to="/"><h1>Beer Info Catalog</h1></Link>
      </header>
      );
  }
});

export default Header;