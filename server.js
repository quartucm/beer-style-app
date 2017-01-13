const path = require('path');
const express = require('express');
const request = require('request');
import config from './server/config';
import qs from 'qs';

const allowed = ['https://localhost:8080', 'https://beer-style-app.herokuapp.com/']

const app = express();

const port = process.env.PORT ? process.env.PORT : 8181;
const dist = path.join(__dirname, 'dist');

app.use(express.static(dist));

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
		key: `${config.default.API_KEY}`
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

