import path from 'path';
import express from 'express';
import { getBeer, getStyle } from './server/beer.js';

const allowed = ['http://localhost:8080', 'https://beer-style-app.herokuapp.com/']

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

app.get('/api/beer', getBeer);
app.get('/api/beerStyle', getStyle);


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
