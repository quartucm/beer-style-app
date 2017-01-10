import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStyleData } from 'actions/app';

const BeerInfo = React.createClass({
	componentDidMount() {
		// if(!this.props.beerData) {
		this.props.dispatch(getStyleData(this.props.id));
		// }
	},
	render() {
		const { description, shortName } = this.props.styleData;
		return (
			<div>
				<h1>{shortName}</h1>
				<div>{description}</div>
			</div>
		);
	}
});

function mapStateToProperties(state, ownProps) {
  return {
  	id: ownProps.params.id,
  	styleData: state.app.styleData
  };
}

export default connect(mapStateToProperties)(BeerInfo)