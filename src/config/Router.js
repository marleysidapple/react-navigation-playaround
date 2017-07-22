import { StackNavigator, TabNavigator }  from 'react-navigation';
import SecondScreen  from './../screens/SecondScreen';
import HomeScreen  from './../screens/HomeScreen';
import { Icon } from 'react-native-elements';


const Tabs = TabNavigator({
  Home: {
    screen: HomeScreen,
    // navigationOptions: {
    //   tabBarLabel: 'Feed',
    //   tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
    // },
  },
  SecondScreen: {
    screen: SecondScreen,
    // navigationOptions: {
    //   tabBarLabel: 'Me',
    //   tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
    // },
  },
});


const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  SecondScreen: {screen: Tabs}
},
{
  initialRouteNmae: 'Home'
});



export default SimpleApp;
