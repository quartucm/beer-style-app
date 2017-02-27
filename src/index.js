import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from 'store';
import routes from 'routes';
import '!style!css!sass!foundation.scss/foundation.scss';
import 'foundation.scss/foundation.scss'

render(
  <Provider store={store}>{routes}</Provider>,
  document.getElementById('react')
);
