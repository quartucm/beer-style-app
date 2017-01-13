import { GET_BEER_STYLE_DATA, AJAX_DONE } from 'constants/action-types';
import axios from 'axios';
import apiConfig from '../apiConfig';

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
		axios.get(`${apiConfig.api}/beer`)
	        .then((response) => {
	          dispatch(gotBeerStyle(response.data));
	          dispatch(ajaxComplete())
	        })
	        .catch((error) => {
	          console.error('Axios Error in getting style of beer', error)
	    })
	}
}
