import React from 'react';
import { Match, Miss, Redirect } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { history } from 'store/index';
import Layout from 'containers/layout';
import App from 'containers/app';
import BeerStyleList from 'containers/BeerStyleList';
import BeerInfo from 'containers/BeerInfo';
import NotFound from 'components/NotFound';

const routes = (
  <ConnectedRouter history={history}>
    <Layout>
      <Match exactly pattern="/" component={App} />
      <Match exactly pattern="/beer" component={BeerStyleList} />
      <Match pattern="/beerInfo/:id" component={BeerInfo} />
      <Miss component={NotFound} />
    </Layout>
  </ConnectedRouter>
);

export default routes;
