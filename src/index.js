import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from 'store';
import routes from 'routes';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();


const reduxRouterMiddleware = syncHistory(browserHistory);
const myStore = store(window.__INITIAL_STATE__, reduxRouterMiddleware);

// render(
//   <Provider store={store}>{routes}</Provider>,
//   document.getElementById('react')
// );

match({ routes, location }, () => {
  render(
    <Provider store={ myStore }>
      <Router routes={ routes } history={ history }/>
    </Provider>,
    document.getElementById('react')
  );
});