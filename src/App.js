
import React, { Component } from 'react';
import { Text, View, StyleSheet} from 'react-native';
import { Button, Icon } from 'react-native-elements';


class App extends Component {
  render() {

    return(
      <View style={styles.mainContainer}>
          <Text>Hello i have added new ones</Text>
          <Button
           onPress={() => this.props.navigation.navigate('SecondScreen')}
           title="Go to Second Screen"
           />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: 30
  }
});


export default App;
