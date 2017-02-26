import request from 'request';
import qs from 'qs';
import config from './config';

export function getBeer(req, res) {
  request.get({ url: `https://api.brewerydb.com/v2/styles?${qs.stringify({
    format: 'json',
    key: config.API_KEY
  })}` }, function (error, response, body) { 
    if (!error && response.statusCode === 200) {
      res.send(body); 
    } 
  }); 
}

export function getStyle(req, res) {
  if (!req.query.id) {
    res.status(500).send('Error: something went wrong. Please pass in an ID');
    console.log('Missing an ID!');
  }
  request.get({ url: `https://api.brewerydb.com/v2/beers?${qs.stringify({
    styleId: req.query.id,
    format: 'json',
    key: config.API_KEY
  })}`}, function (error, response, body) { 
    if (!error && response.statusCode === 200) {
      res.send(body);
    }
  });
}

