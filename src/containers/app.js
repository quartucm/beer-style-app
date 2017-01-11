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
  }

  props: Props;

  render() {
    if (!this.props.loaded) {
      return null;
    }
    return (
      <div className={styles.container}>
        <Home />
      </div>
    );
  }
}

function mapStateToProperties(state) {
  return {
    loaded: state.app.loaded,
  };
}

export default connect(mapStateToProperties)(AppContainer);
