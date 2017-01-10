import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBeerData } from 'actions/app';

const BeerInfo = React.createClass({
	componentDidMount() {
		
	},
	render() {
		return (
			<div>My info {this.props}</div>
		);
	}
});

function mapStateToProperties(state, ownProps) {
  const detail = state.app.beerData[ownProps.id];
  return {
    detail
  };
}

export default connect(mapStateToProperties)(BeerInfo)