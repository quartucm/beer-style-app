import { APP_LOAD, GET_BEER_DATA } from 'constants/action-types';

const initialState = {
  loaded: false,
  beerData: {}
};

export default function app(state = initialState, action) {
  switch (action.type) {
    case APP_LOAD:
      return { ...state, loaded: true };
    case GET_BEER_DATA:
      return {...state, beerData:{'Some test data':'Data from reducer'}};
    default:
      return state;
  }
}
