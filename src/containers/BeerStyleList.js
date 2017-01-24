import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStyleOfBeer } from 'actions/getBeerStyle';
import BeerTile from '../components/Beer/BeerTile';
import styles from './app.scss';
import Loading from '../components/Loading';

type Props = {
  dispatch: () => void
};

export class BeerStyleList extends Component {

  componentDidMount() {
    if (!this.props.beerData[0]) {
      this.props.dispatch(getStyleOfBeer());
    }
  };

  props: Props;

  render() {
    let loaded = this.props.apiLoad;
    if (loaded) {
      return (
         <div className='row'>
           {this.props.beerData.map((beer) => {
              return (
                <BeerTile {...beer} key={beer.id} />
                )
            })}
          </div>
       );
    } else {
      return (
        <Loading/>
        )
    }
  }
}

function mapStateToProperties(state) {
  return {
    beerData: state.app.beerData,
    apiLoad : state.app.apiLoad
  };
}

export default connect(mapStateToProperties)(BeerStyleList);
