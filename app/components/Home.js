var React = require('react');
var GetCityContainer = require('../containers/GetCityContainer');
var Provider = require('react-redux');
var createStore = require('redux').createStore;
var todoApp = require('../reducers/index')
var App = require('../components/App')

let store = createStore(todoApp);


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
      <Provider store={store}>
        <App />
      </Provider>
    </div>
  )
};

module.exports = Home;
