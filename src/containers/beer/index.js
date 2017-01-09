import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from '../app.css';
import { getStyleOfBeer } from 'actions/app';

type Props = {
  dispatch: () => void
}

export class BeerContainer extends Component {

  componentDidMount() {
    this.props.dispatch(getStyleOfBeer());
  }

  props: Props;

  render() {
    return (
       <div className={styles.container}>
        {this.props.beerData.map((beer) => {
            return (
              <div key={beer.id}>
                <h1>{beer.shortName}</h1>
                <p>{beer.description}</p>
              </div>
              )
          })}
      </div>
    );
  }
}

function mapStateToProperties(state) {
  return {
    beerData: state.app.beerData,
  };
}

export default connect(mapStateToProperties)(BeerContainer);
