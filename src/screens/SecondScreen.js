import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';


class SecondScreen extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <View>
        <Text>This is second screen</Text>
      </View>
    );
  }
}

SecondScreen.navigationOptions = {
  title: 'Second Screen Title',
};

export default SecondScreen;
