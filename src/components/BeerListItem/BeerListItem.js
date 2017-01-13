import React from 'react';
import BeerTile from '../Beer/BeerTile.js';

export const BeerList = React.createClass({
	render() {
		const { beer } = this.props
		return (
			<div>
				{beer.name}
			</div>
		)
	}
})

export default BeerList
