import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getListOfBeerByStyle } from '../actions/getListByStyle';
import BeerListItem from '../components/BeerListItem/BeerListItem';

export const BeerListContainer = React.createClass({
	componentDidMount() {
		//if (!this.props.styleOfBeerList[0]) {
			this.props.dispatch(getListOfBeerByStyle(this.props.id));
		//}
	},
	render() {

		return (
			
				<div className='small-4 columns'>
					<h5>Beers with this style</h5>
						{this.props.styleOfBeerList.map((beer) => {
							return (
								<p key={beer.id}>{beer.name}</p>
								// <BeerListItem {...beer} key={beer.id} />
							)
						})}
				</div>
		
			);
	}
});

function mapStateToProperties(state, ownProps) {
	return {
		styleOfBeerList: state.app.styleOfBeerList,
	}
}

export default connect(mapStateToProperties)(BeerListContainer)