var React = require('react');
var utils = require('../utils/weatherlayout');
var DayItem = require('./DayItem');
var convertTemp = utils.convertTemp;

var styles = {
  descriptionContainer: {
    fontSize: 34,
    fontWeight: 100,
    maxWidth: 400,
    margin: '0 auto',
    textAlign: 'center',
  }
}
function Details(props){
  return(
    <div style={styles.container}>
      <DayItem day={props.weather} />
      <div style={styles.descriptionContainer}>
      <p>{props.city}</p>
      <p>{props.weather.weather[0].description}</p>
      <p>min temp: {Math.round(convertTemp(props.weather.temp.min))} degrees</p>
      <p>max temp: {Math.round(convertTemp(props.weather.temp.max))} degrees</p>
      <p>humidity:
      {props.weather.humidity}</p>
      </div>
    </div>
  )
}

module.exports = Details;
