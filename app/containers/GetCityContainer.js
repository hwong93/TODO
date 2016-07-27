var React = require('react');
var PropTypes = React.PropTypes;
var GetCity = require('../components/GetCity');

var GetCityContainer = React.createClass({
  contextTypes :{
    router:
    React.PropTypes.object.isRequired
  },

  getDefaultProps: function(){
    return {
      direction: 'column'
    }
  },

  propTypes: {
    direction: PropTypes.string
  },

  getInitialState: function(){
    return{
      city: ''
    }
  },
  handleUpdateCity: function(ev){
    this.setState({
      city: ev.target.value
    })
  },
  handleSubmitCity: function(ev){
    ev.preventDefault();
    if(this.state.city === ''){

    }else{
      this.context.router.push('/forecast/' + this.state.city)
    }
  },
  
  render: function(){
    return(
      <GetCity
        direction={this.props.direction}
        onSubmitCity={this.handleSubmitCity}
        onUpdateCity={this.handleUpdateCity}
        city={this.state.city} />
    )
  }
});

module.exports = GetCityContainer;
