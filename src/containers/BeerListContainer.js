import React, { Component } from 'react';
import { connect } from 'react-redux';

export const BeerListContainer = React.createClass({
	render() {
		return (
			<div>
				{this.props.children}
			</div>
		);
	}
});

function mapStateToProperties(state, ownProps) {
  return {

  }
}

export default connect(mapStateToProperties)(BeerListContainer)