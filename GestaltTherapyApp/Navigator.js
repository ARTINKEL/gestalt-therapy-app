import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import MyAssignments from './MyAssignments.js';
import Assignment from './Assignment.js';

const MainNavigator = createStackNavigator(
  {
  MyAssignments: MyAssignments,
  Assignment: Assignment
  },
  {
    initialRouteName: 'MyAssignments'
  }
);

const navigator = createAppContainer(MainNavigator);

export default navigator;