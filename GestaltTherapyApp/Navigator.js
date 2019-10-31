import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import MyAssignments from './MyAssignments.js';

const MainNavigator = createStackNavigator({
  MyAssignments: {screen: MyAssignments}
});

const navigator = createAppContainer(MainNavigator);

export default navigator;