import { APP_LOAD, GET_BEER_STYLE_DATA, AJAX_DONE, GET_STYLE_ID } from 'constants/action-types';

const initialState = {
  loaded: false,
  beerData: {},
  apiLoad : false,
  styleData: {}
};

const getBeerData = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {beerData: action.beerData.data})
  return newState
}

const styleBeerData = (state, action) => {
  const styleBeerData = {}
  Object.assign(styleBeerData, state.styleData, {[action.styleData.data.id]: action.styleData.data})
  const newState = {}
  Object.assign(newState, state, {styleData:styleBeerData})
  return newState
}


export default function app(state = initialState, action) {
  switch (action.type) {
    case APP_LOAD:
      return { ...state, loaded: true };
    case GET_BEER_STYLE_DATA:
     return getBeerData(state, action)
    case AJAX_DONE:
      return { ...state, apiLoad: true};
    case GET_STYLE_ID:
      return styleBeerData(state, action);
    default:
      return state;
  }
}
