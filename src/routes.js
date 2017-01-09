import React from 'react';
import { Match } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { history } from 'store/index';
import Layout from 'containers/layout';
import App from 'containers/app';
import Beer from 'containers/beer';

const routes = (
  <ConnectedRouter history={history}>
    <Layout>
      <Match exactly pattern="/" component={App} />
      <Match exactly pattern="/beer" component={Beer} />
    </Layout>
  </ConnectedRouter>
);

export default routes;
