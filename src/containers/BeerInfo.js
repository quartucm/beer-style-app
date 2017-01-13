import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStyleOfBeer } from 'actions/getBeerStyle';
import BeerListContainer from './BeerListContainer';

const BeerInfo = React.createClass({
	componentDidMount() {
		if (!this.props.beerData.id) {
	       this.props.dispatch(getStyleOfBeer());
	    }
	},
	render() {
		const { name, description, ibuMin, ibuMax } = this.props.beerData;	
		let hideText;

		if (!this.props.beerData) {
			hideText = '';
			return null
		} else {
			hideText = (
				<b>ibu Range:</b> 
			)
		}
		return (
	
			<div className='row'>
				<div className='small-8 columns'>
					<h2>{name}</h2>
					<p>{hideText} {ibuMin} - {ibuMax}</p>
					<p>{description}</p>
				</div>
				<div className='small-4 columns'>
					<BeerListContainer id={this.props.id} />
				</div>
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