import path from 'path';
import express from 'express';
import request from 'request';
import config from './server/config';
import qs from 'qs';

import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import routes from './src/routes'

const allowed = ['http://localhost:8080', 'https://beer-style-app.herokuapp.com/']

const app = express();

const port = process.env.PORT ? process.env.PORT : 8181;
const dist = path.join(__dirname, 'dist');

app.use(express.static(dist));

app.use((req, res) => {
  // Note that req.url here should be the full URL path from
  // the original request, including the query string.
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      // You can also check renderProps.components or renderProps.routes for
      // your "not found" component or route respectively, and send a 404 as
      // below, if you're using a catch-all route.
      res.status(200).send(renderToString(
          <Provider store={store}>
            { <RouterContext {...renderProps}/> }
          </Provider>))
    } else {
      res.status(404).send('Not found')
    }
  })
})

app.get('/', (req, res) => {
	res.sendFile(path.join(dist, 'index.html'));
});

//CORS
app.get('*', (req, res, next) => {
	const origin = req.headers.origin;
	if (allowed.indexOf(origin) > -1) {
		res.header("Access-Control-Allow-Origin", origin);
	}
    res.header("Access-Control-Allow-Methods", "GET");
    res.header("Access-Control-Allow-Headers", req.header('access-control-request-headers'));
    next();
});

app.get('/beer', function(req, res){
	request.get({ url: `https://api.brewerydb.com/v2/styles?${qs.stringify({
		format: 'json',
		key: config.API_KEY
	})}`}, function(error, response, body) { 
		if (!error && response.statusCode == 200) { 
			res.send(body); 
		} 
	}); 
});
app.get('/beerStyle', function(req, res){
	if(!req.query.id) {
		res.status(500).send('Error: something went wrong. Please pass in an ID');
		console.log('Missing an ID!');
	}
	request.get({ url: `https://api.brewerydb.com/v2/beers?${qs.stringify({
		styleId: req.query.id,
		format: 'json',
		key: config.API_KEY
	})}`}, function(error, response, body) { 
		if (!error && response.statusCode == 200) { 
			res.send(body); 
		} 
	}); 
});

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('There was an error')
})


app.listen(port, (error) => {
	if (error) {
    console.log(error); // eslint-disable-line no-console
}
  console.info('Express is listening on port %s.', port); // eslint-disable-line no-console
});

