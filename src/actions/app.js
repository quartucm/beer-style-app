import { APP_LOAD, GET_STYLE_ID } from 'constants/action-types';
import axios from 'axios';
import apiConfig from '../apiConfig';

export function loadApp() {
  return {
    type: APP_LOAD,
  };
}

export function gotStyleData(id, styleData) {
  return {
    type: GET_STYLE_ID,
    id,
    styleData
  };
}

export function getStyleData(id) {
	return function (dispatch, state) {
		axios.get(`${apiConfig.api}/beer/${id}`)
	        .then((response) => {
	          dispatch(gotStyleData(id, response.data));
	        })
	        .catch((error) => {
	          console.error('Axios Error in fetching beerData', error)
	    })
	}
};

