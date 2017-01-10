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

// function shouldFetchPosts(state, subreddit) {
//   // const posts = state.beerData
//   console.log(state);
//   debugger;
//   if (!posts) {
//     return true
//   } else {
//     return posts.didInvalidate
//   }
// }

// export function fetchPostsIfNeeded(subreddit) {

//   // Note that the function also receives getState()
//   // which lets you choose what to dispatch next.

//   // This is useful for avoiding a network request if
//   // a cached value is already available.

//   return (dispatch, getState) => {
//     if (shouldFetchPosts(getState(), subreddit)) {
//       // Dispatch a thunk from thunk!
//       return dispatch(getStyleOfBeer())
//     } else {
//       // Let the calling code know there's nothing to wait for.
//       return Promise.resolve()
//     }
//   }
// }