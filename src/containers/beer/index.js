import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from '../app.css';
import { getStyleOfBeer } from 'actions/app';
import BeerTile from '../../components/Beer/BeerTile'

type Props = {
  dispatch: () => void
}

export class BeerContainer extends Component {

  componentDidMount() {
    this.props.dispatch(getStyleOfBeer());
  }

  props: Props;

  render() {
    let loaded = this.props.apiLoad;
    if (loaded) {
      return (
         <div className={styles.container}>
           {this.props.beerData.map((beer) => {
              return (
                <BeerTile {...beer} key={beer.id} />
                )
            })}
          </div>
       );
    } else {
      return (
        <div>Loading...</div>
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

export default connect(mapStateToProperties)(BeerContainer);
