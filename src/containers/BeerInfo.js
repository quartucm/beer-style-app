import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStyleData } from 'actions/app';

const BeerInfo = React.createClass({
	componentDidMount() {
		if(!this.props.styleData[this.props.id]) {
	     	this.props.dispatch(getStyleData(this.props.id));
		}
		console.log(this.props);

	},
	render() {
		const { shortName, description } = this.props.styleData;
		return (
			<div>
				<h1>{shortName}</h1>
				<p>{description}</p>
			</div>
		);
	}
});

function mapStateToProperties(state, ownProps) {
  const styleData = state.app.styleData[ownProps.params.id] ? state.app.styleData[ownProps.params.id] : {};
  return {
  	styleData,
  	id: ownProps.params.id
  };
}

export default connect(mapStateToProperties)(BeerInfo)