import { GET_BEER_STYLE_DATA, AJAX_DONE } from 'constants/action-types';
import axios from 'axios';

export function ajaxComplete () {
	return {
		type: AJAX_DONE
	}
}

export function gotBeerStyle (data) {
  return {
    type: GET_BEER_STYLE_DATA,
    beerData: data
  }
}

export function getStyleOfBeer() {
	return function (dispatch, getState) {
		axios.get(`http://localhost:8181/beer`)
	        .then((response) => {
	          dispatch(gotBeerStyle(response.data));
	          dispatch(ajaxComplete())
	        })
	        .catch((error) => {
	          console.error('axios error', error)
	    })
	}
};