var React = require('react');

// var styles ={
//   header: {
//     background-color: 'tomato',
//   }
// };

var HelloWorld = React.createClass({
  render: function(){
    return(
      <div>
        <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <h3>Hou-Tai's Todo List</h3>
        </div>
        </nav>
        {this.props.children}
      </div>
    )
  }
});

module.exports = HelloWorld;
