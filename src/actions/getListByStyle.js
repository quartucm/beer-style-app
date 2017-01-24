import { GET_BEERS_BY_STYLE, REQUEST_POSTS } from 'constants/action-types';
import axios from 'axios';
import apiConfig from '../apiConfig';


export function gotListOfBeerByStyle (data) {
  return {
    type: GET_BEERS_BY_STYLE,
    data
  }
}

function fetching() {
  return {
    type: REQUEST_POSTS,
  }
}


export function getListOfBeerByStyle(id) {
      return function (dispatch, getState) {
        dispatch(fetching());

        axios.get(`${apiConfig.api}/beerStyle?id=${id}`)
              .then((response) => {
                dispatch(gotListOfBeerByStyle(response.data));
              })
              .catch((error) => {
                console.error('Axios Error in getting style of beer', error)
          })
      }
}
