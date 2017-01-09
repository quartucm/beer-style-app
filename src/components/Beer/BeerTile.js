import React from 'react';
 
const BeerTile = React.createClass({
 	render() {
 		const { shortName, description } = this.props
 		return (
	 		<div>
				<h1>{shortName}</h1>
				<p>{description}</p>
			</div>
 		);
 	}
 });
  
export default BeerTile
