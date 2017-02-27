import React from 'react';
import { Link } from 'react-router';
import '!style!css!sass!foundation.scss/foundation.scss';
import styles from './BeerTileStyle.scss';


const BeerTile = React.createClass({
  render() {
    const { name, description, id } = this.props;
    return (
    <Link to={`beerInfo/${id}`} className={`small-12 medium-4 columns ${styles.beerTile}`}>
        <div>
          <p>{name}</p>
        </div>
    </Link>
      );
  }
});

export default BeerTile;
