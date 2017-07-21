import { StackNavigator} from 'react-navigation';
import SecondScreen  from './../screens/SecondScreen';
import HomeScreen  from './../screens/HomeScreen';


const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  SecondScreen: {screen: SecondScreen, title: 'ss'},
},
{
  initialRouteNmae: 'Home'
});


export default SimpleApp;
