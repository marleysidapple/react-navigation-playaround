import React, { Component } from 'react';
import { StackNavigator, TabNavigator }  from 'react-navigation';
import SecondScreen  from './../screens/SecondScreen';
import HomeScreen  from './../screens/HomeScreen';
import Tabone from './../screens/Tabone';
import Tabtwo from './../screens/Tabtwo';
import { Icon } from 'react-native-elements';


const Tabs = TabNavigator({
  Tabone: {
    screen: Tabone,
    navigationOptions: {
      tabBarLabel: 'Tabone',
      tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
    },
  },
  Tabtwo: {
    screen: Tabtwo,
    navigationOptions: {
      tabBarLabel: 'Tabtwo',
      tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
    },
  },
});

const Router = StackNavigator({
  Home: { screen: HomeScreen },
  SecondScreen: {screen: Tabs}
},
{
  initialRouteNmae: 'Home'
});



export default Router;
