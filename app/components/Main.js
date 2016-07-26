var React = require('react');

var HelloWorld = React.createClass({
  render: function(){
    return(
      <div>
        <div> HelloWorld!</div>
        {this.props.children}
      </div>
    )
  }
});

module.exports = HelloWorld;
