import { APP_LOAD, GET_BEER_DATA, AJAX_DONE } from 'constants/action-types';
import axios from 'axios';

export function loadApp() {
  return {
    type: APP_LOAD,
  };
}

export function getBeerData (data) {
  return {
    type: GET_BEER_DATA,
    beerData: data
  }
}

export function ajaxComplete () {
	return {
		type: AJAX_DONE
	}
}

export function getStyleOfBeer() {
	return function (dispatch, getState) {
		axios.get(`http://localhost:8181/beer`)
	        .then((response) => {
	          dispatch(getBeerData(response.data));
	          dispatch(ajaxComplete())
	        })
	        .catch((error) => {
	          console.error('axios error', error)
	    })
	}
};