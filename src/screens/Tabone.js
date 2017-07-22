import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';


class Tabone extends Component {

  componentWillMount(){
    console.log('hello');
  }


  render(){
    return(
      <Text>This is tab one</Text>
    );
  }
}

function mapStateToProps(state){
  console.log(state);
  return {

  };
}


export default connect(mapStateToProps)(Tabone);
