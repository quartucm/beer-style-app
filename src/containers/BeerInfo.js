import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStyleOfBeer } from 'actions/getBeerStyle';
import { getListOfBeerByStyle } from 'actions/getListByStyle';
import BeerDetail from 'components/BeerDetail/BeerDetail';
import BeerList from 'components/BeerList/BeerList';

const BeerInfo = React.createClass({
	componentDidMount() {
		if (!this.props.beerData.id) {
      this.props.dispatch(getStyleOfBeer());
    }
    this.props.dispatch(getListOfBeerByStyle(this.props.id));

  },
  render() {
    let ShowList = null;

    if (this.props.isFetching) {
      ShowList = <h2>Loading...</h2> 
    } else {
      ShowList = <BeerList {...this.props} key={this.props.id}/>
    }

    return (
     <div className='row'>
        <BeerDetail {...this.props.beerData} />
       {ShowList}
     </div>
     );
  }
});

function mapStateToProperties(state, ownProps) {
  const beerData = state.app.beerData[ownProps.params.id - 1] ? state.app.beerData[ownProps.params.id - 1] : {};
  return {
  	beerData,
  	id: ownProps.params.id,
  	styleOfBeerList: state.app.styleOfBeerList,
    isFetching: state.app.isFetching
  };
}

export default connect(mapStateToProperties)(BeerInfo)