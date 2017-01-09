import { APP_LOAD, GET_BEER_DATA } from 'constants/action-types';

const initialState = {
  loaded: false,
  beerData: {}
};

const getBeerData = (state, action) => {
  const newBeerData = {}
  Object.assign(newBeerData, state.beerData, {beerData:action.beerData})
  const newState = {}
  Object.assign(newState, state, {beerData: newBeerData})
  return newState
}

export default function app(state = initialState, action) {
  switch (action.type) {
    case APP_LOAD:
      return { ...state, loaded: true };
    case GET_BEER_DATA:
     return getBeerData(state, action)
    default:
      return state;
  }
}
