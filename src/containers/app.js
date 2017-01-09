import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadApp, getBeerData } from 'actions/app';
import styles from './app.css';
import Header from '../components/Header/Header';
import Home from '../components/Home/Home';

type Props = {
  dispatch: () => void,
  loaded: boolean
}

export class AppContainer extends Component {
  componentDidMount() {
    this.props.dispatch(loadApp());
    this.props.dispatch(getBeerData());
  }

  props: Props;

  render() {
    if (!this.props.loaded) {
      return null;
    }
    console.log(this.props.beerData);
    return (
      <div className={styles.container}>
        <Header />
        <Home />
      </div>
    );
  }
}

function mapStateToProperties(state) {
  return {
    loaded: state.app.loaded,
    beerData: state.app.beerData
  };
}

export default connect(mapStateToProperties)(AppContainer);
