var React = require('react');
var Forecast = require('../components/Forecast');
var getForcast= require('../utils/weatherapi').getForcast;
var getCurrentWeather=require('../utils/weatherapi').getCurrentWeather;



var ForecastContainer = React.createClass({
  contextTypes: {
    router:
    React.PropTypes.object.isRequired
  },
  getInitialState: function(){
    return{
      isLoading: true,
      forecastData: {}
    }
  },
  componentDidMount: function(){
    this.makeRequest(this.props.routeParams.city)
  },
  componentWillReceiveProps: function(nextProps){
    this.makeRequest(nextProps.routeParams.city)
  },
  makeRequest: function(city){
    getForcast(city).then(function(forecastData){
      this.setState({
        isLoading: false,
        forecastData: forecastData
      });
    }.bind(this));
  },
  handleClick: function(weather){
    this.context.router.push({
      pathname:'/details/' + this.props.routeParams.city,
      state: {
        weather: weather
      }
    })
  },

  render: function(){
    return(
      <Forecast
        city={this.props.routeParams.city}
        isLoading={this.state.isLoading}
        handleClick={this.handleClick}
        forecastData={this.state.forecastData}
      />
    )
  }
});

module.exports = ForecastContainer;
