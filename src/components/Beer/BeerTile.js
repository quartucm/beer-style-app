import React, { propTypes } from 'react';
import { Link } from 'react-router';
import styles from './BeerTileStyle.scss';


const BeerTile = React.createClass({
  propTypes: {
    name: React.PropTypes.string,
    description: React.PropTypes.string,
    id: React.PropTypes.number
  },

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
