import React from 'react';
import { Link } from 'react-router';
import styles from './Home.scss';

const Home = React.createClass({
  render() {
    return (
      <div className="row">
        <div className={`columns small-6 small-centered ${styles.homeBtn}`}>
          <Link to={'beer'}>
          Explore some styles of beer
          </Link>
        </div>
      </div>
      );
  }
});

export default Home;
