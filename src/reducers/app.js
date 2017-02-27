import { APP_LOAD, GET_BEER_STYLE_DATA, AJAX_DONE, GET_BEERS_BY_STYLE, REQUEST_POSTS } from 'constants/action-types';


const initialState = {
  loaded: false,
  beerData: {},
  apiLoad: false,
  styleOfBeerList: {},
  isFetching: false
};

const getBeerData = (state, action) => {
 return Object.assign({}, state, {beerData: action.beerData.data, isFetching: false});
};

const getBeersByStyle = (state, action) => {
  const beerList = Object.assign( {}, state.styleOfBeerList, {[action.id]: action.data.data} );
  return Object.assign( {}, state, {styleOfBeerList: beerList}, {isFetching: false} );
};

export default function app(state = initialState, action) {
  switch (action.type) {
    case APP_LOAD:
      return { ...state, loaded: true };
    case GET_BEER_STYLE_DATA:
     return getBeerData(state, action);
    case AJAX_DONE:
      return Object.assign({}, state, {apiLoad: true});
    case GET_BEERS_BY_STYLE:
      return getBeersByStyle(state, action);
    case REQUEST_POSTS:
      return Object.assign({}, state, {isFetching: true});
    default:
      return state;
  }
}
