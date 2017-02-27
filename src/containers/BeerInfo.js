import React from 'react';
import { connect } from 'react-redux';
import { getStyleOfBeer } from 'actions/getBeerStyle';
import BeerDetail from 'components/BeerDetail/BeerDetail';
import Loading from '../components/Loading';

const BeerInfo = React.createClass({
  componentDidMount() {
    if (!this.props.beerData.id) {
      this.props.dispatch(getStyleOfBeer());
    }

  },
render() {
    let ShowList = null;

    return (
     <div className='row'>
     <BeerDetail {...this.props.beerData} />
     </div>
     );
  }
});

function mapStateToProperties(state, ownProps) {
  const beerData = state.app.beerData[ownProps.params.id - 1] 
  ? state.app.beerData[ownProps.params.id - 1] 
  : {};
  return {
    beerData,
    id: ownProps.params.id,
    styleOfBeerList: state.app.styleOfBeerList,
    isFetching: state.app.isFetching
  };
}

export default connect(mapStateToProperties)(BeerInfo);