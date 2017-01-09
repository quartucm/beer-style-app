import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from '../app.css';
import { loadApp, getBeerData } from 'actions/app';
import axios from 'axios';

let baseURL = "";

type Props = {
  dispatch: () => void,
  loaded: boolean
}

export class BeerContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getBeerData());
    axios.get(`http://localhost:8181/beer`)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error('axios error', error)
    })
  }

  props: Props;

  render() {
    if (!this.props.beerData) {
      return null;
    }
    return (
      <div className={styles.container}>
        Here is my beer route
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
