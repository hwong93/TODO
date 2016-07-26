var React = require('react');

var styles = {
  contain: {
    marginTop: 50,
  }
}

function Home(props){
  return (
    <div className="container text-center" style={styles.contain}>
      <h1> Hello from home </h1>
    </div>
  )
};

module.exports = Home;
