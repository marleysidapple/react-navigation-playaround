
import React, { Component } from 'react';
import { Text, View, StyleSheet} from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import reducers from './reducers';
import Router from './config/Router';


const store = applyMiddleware(thunk, promise)(createStore);

class App extends Component {
  render() {

    return(
      <Provider store={store(reducers)}>
      		<Router />
      	</Provider>
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
