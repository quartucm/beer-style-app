import React from 'react';
import { Link } from 'react-router'

 
const BeerTile = React.createClass({
 	render() {
 		const { shortName, description, id } = this.props
 		return (
 		<Link to={`beerInfo/${id}`}>
	 		<div>
				<h1>{shortName}</h1>
				{/*<p>{description}</p>*/}
			</div>
		</Link>
 		);
 	}
 });
  
export default BeerTile
