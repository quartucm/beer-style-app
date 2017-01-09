const path = require('path');
const express = require('express');
const request = require('request');
const API_KEY = '35c978fd032c532678c30e3e43929f4d';

const app = express();

const port = process.env.PORT ? process.env.PORT : 8181;
const dist = path.join(__dirname, 'dist');

app.use(express.static(dist));

app.get('/', (req, res) => {
	res.sendFile(path.join(dist, 'index.html'));
});

//CORS
app.get('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    res.header("Access-Control-Allow-Methods", "GET");
    res.header("Access-Control-Allow-Headers", req.header('access-control-request-headers'));

    if (req.method === 'OPTIONS') {
        // CORS Preflight
        res.send();
    } else {
        next();
    }
});

app.get('/beer', function(req, res){
	// if (!req.params.id) { 
	// 	res.status(500); 
	// 	res.send({"Error": "Looks like you are not senging the product id to get the product details."}); 
	// 	console.log("Looks like you are not senging the product id to get the product detsails."); 
	// } 
	request.get({ url: `http://api.brewerydb.com/v2/styles?format=json&key=35c978fd032c532678c30e3e43929f4d` }, function(error, response, body) { 
		if (!error && response.statusCode == 200) { 
			res.send(body); 
		} 
	}); 
});


app.listen(port, (error) => {
	if (error) {
    console.log(error); // eslint-disable-line no-console
}
  console.info('Express is listening on port %s.', port); // eslint-disable-line no-console
});

