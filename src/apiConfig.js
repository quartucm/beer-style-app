const apiConfig = {
	'localhost' : {
		'api' : 'http://localhost:8181'
	},
	'beer-style-app.herokuapp.com' : {
		'api' : 'http://beer-style-app.herokuapp.com:8181'
	}

}[window.location.hostname]

export default apiConfig