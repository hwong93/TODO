var React = require('react');
var GetCityContainer = require('../containers/GetCityContainer');

var styles = {
  contain: {
    marginTop: 50,
  }
}

function Home(props){
  return (
    <div className="container text-center" style={styles.contain}>
      <h1> Weather </h1>
      <GetCityContainer />
    </div>
  )
};

module.exports = Home;
