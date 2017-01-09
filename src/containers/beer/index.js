import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from '../app.css';
import { loadApp, getStyleOfBeer } from 'actions/app';

let baseURL = "";

type Props = {
  dispatch: () => void
}

export class BeerContainer extends Component {

  componentDidMount() {
    this.props.dispatch(getStyleOfBeer());

  }

  props: Props;


  render() {
    if (!this.props.beerData) {
      return null;
    }
    return (
      <div className={styles.container}>
       
        <h1></h1>
  

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
