const apiConfig = {
  localhost: {
    api: 'http://localhost:8181'
  },
  'beer-style-app.herokuapp.com': {
    api: 'https://beer-style-app.herokuapp.com'
  }

}[window.location.hostname];

export default apiConfig;
