import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getListOfBeerByStyle } from 'actions/getListByStyle';

export const BeerList = React.createClass({

	render() {
		return (
			<div className='small-4 columns'>
				<h5>Beers with this style</h5>
				{this.props.styleOfBeerList.map((beer) => {
					return (
						<p key={beer.id}>{beer.name}</p>
					)
				})}
			</div>
		);
	}
});



export default BeerList;