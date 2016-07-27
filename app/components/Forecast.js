var React = require('react');
var PropTypes = React.PropTypes;
var utils = require('../utils/weatherlayout');
var getDate = utils.getDate;
var convertTemp = utils.convertTemp;
var DayItem = require('../components/DayItem');

var styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxWidth: 1200,
    margin: '50px auto'
  },
  dayContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: 35
  },
  header: {
    fontSize: 65,
    color: '#333',
    fontWeight: 100,
    textAlign: 'center'
  },
  subheader: {
    fontSize: 30,
    color: '#333',
    fontWeight: 100
  },
  weather: {
    height: 130
  }
}

function ForecastUI(props){
  return(
    <div>
      <h1 style={styles.header}>{props.city}</h1>
      <p style={styles.subheader}>Select a day</p>
      <div style={styles.container}>
      {props.forecast.list.map(function(listItem) {
        return <DayItem key={listItem.dt} day={listItem} handleClick={props.handleClick.bind(null,listItem)}/>
      })}
      </div>
    </div>
  )
}

function Forecast(props){
  if(props.isLoading === true){
    return (
      <h2>Loading</h2>
    )
  }else{
    return(
      <ForecastUI
        city={props.city}
        forecast={props.forecastData}
        handleClick={props.handleClick} />
    )
  }

}

Forecast.propTypes = {
  city: PropTypes.string.isRequired,
  forecastData: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired
}

module.exports = Forecast;
