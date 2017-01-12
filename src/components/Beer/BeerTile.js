import React from 'react';
import { Link } from 'react-router';
import styles from './BeerTileStyle.scss';

 
const BeerTile = React.createClass({
 	render() {
 		const { shortName, description, id } = this.props
 		return (
	 		<Link to={`beerInfo/${id}`}>
		 		<div className={`pure-u-1-3 ${styles.beerTile}`}>
					<h1>{shortName}</h1>
				</div>
			</Link>
 		);
 	}
 });
  
export default BeerTile
