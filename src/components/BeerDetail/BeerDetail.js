import React from 'react';

export const BeerDetail = React.createClass({
	render() {
		const { name, description, ibuMin, ibuMax } = this.props;	

		return (
			<div className='small-8 columns'>
				<h2>{name}</h2>
				<p>ibu Range: {ibuMin} - {ibuMax}</p>
				<p>{description}</p>
			</div>
		);
	}
})

export default BeerDetail;
