import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStyleOfBeer } from 'actions/getBeerStyle';

const BeerInfo = React.createClass({
	componentDidMount() {
		if (!this.props.beerData.id) {
	       this.props.dispatch(getStyleOfBeer());
	    }
	    console.log(this.props.id)

	},
	render() {
		const { shortName, description } = this.props.beerData;	

		console.log(this.props.beerData);

		if (!this.props.beerData) {
			return null
		}

		return (
	
			<div>
				<h1>{shortName}</h1>
				<p>{description}</p>
			</div>
		);
	}
});

function mapStateToProperties(state, ownProps) {
  const beerData = state.app.beerData[ownProps.params.id - 1] ? state.app.beerData[ownProps.params.id - 1] : {};
  return {
  	beerData,
  	id: ownProps.params.id
  };
}

export default connect(mapStateToProperties)(BeerInfo)