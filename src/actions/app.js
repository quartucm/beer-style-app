import { APP_LOAD, GET_STYLE_ID } from 'constants/action-types';
import axios from 'axios';

export function loadApp() {
  return {
    type: APP_LOAD,
  };
}

export function gotStyleData(styleData) {
  return {
    type: GET_STYLE_ID,
    styleData
  };
}

export function getStyleData(id) {
	return function (dispatch, state) {
		axios.get(`http://localhost:8181/beer/${id}`)
	        .then((response) => {
	          dispatch(gotStyleData(response.data));
	          // dispatch(ajaxComplete())
	        })
	        .catch((error) => {
	          console.error('axios error', error)
	    })
	}
};