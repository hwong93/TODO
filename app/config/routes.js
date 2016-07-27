var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../components/Main');
var HomeContainer = require('../containers/HomeContainer');
var ForecastContainer = require('../containers/ForecastContainer');
var DetailsContainer = require('../containers/DetailsContainer');

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={HomeContainer} />
      <Route path='forecast/:city' component={ForecastContainer} />
      <Route path='details/:city' component={DetailsContainer} />
    </Route>
  </Router>
);

module.exports = routes;
