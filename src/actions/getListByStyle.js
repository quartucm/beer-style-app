import { GET_BEERS_BY_STYLE } from 'constants/action-types';
import axios from 'axios';
import apiConfig from '../apiConfig';


export function gotListOfBeerByStyle (data) {
  return {
    type: GET_BEERS_BY_STYLE,
    data
  }
}

export function getListOfBeerByStyle(id) {
	return function (dispatch, getState) {
		axios.get(`${apiConfig.api}/beerStyle?id=${id}`)
	        .then((response) => {
	          dispatch(gotListOfBeerByStyle(response.data));
	        })
	        .catch((error) => {
	          console.error('Axios Error in getting style of beer', error)
	    })
	}
}
