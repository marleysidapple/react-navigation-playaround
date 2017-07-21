import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';

class HomeScreen extends Component {
  render(){
    return(
      <View>
        <Text>I am in home right now</Text>
        <Button
         onPress={() => this.props.navigation.navigate('SecondScreen')}
         title="Go to Second Screen"
         />
      </View>
    )
  }
}

HomeScreen.navigationOptions = {
  title: 'Home Screen Title',
  header: null
};


export default HomeScreen;
