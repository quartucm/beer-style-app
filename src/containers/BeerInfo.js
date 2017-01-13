import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStyleOfBeer } from 'actions/getBeerStyle';
import BeerDetail from '../components/BeerDetail/BeerDetail';
import BeerListContainer from './BeerListContainer';

const BeerInfo = React.createClass({
	componentDidMount() {
		if (!this.props.beerData.id) {
	       this.props.dispatch(getStyleOfBeer());
	    }
	},
	render() {
		return (
			<div className='row'>
				<BeerDetail {...this.props.beerData} />
				<BeerListContainer id={this.props.id} key={this.props.id}/>
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