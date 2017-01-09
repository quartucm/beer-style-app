import { APP_LOAD, GET_BEER_DATA } from 'constants/action-types';

export function loadApp() {
  return {
    type: APP_LOAD,
  };
}

export function getBeerData() {
  return {
    type: GET_BEER_DATA
  }
}
