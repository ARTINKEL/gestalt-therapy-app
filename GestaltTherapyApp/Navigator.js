import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import MyAssignments from './MyAssignments.js';
import Assignment from './Assignment.js';
import LogIn from './LogIn.js';
import AssignmentBuilder from './AssignmentBuilder.js';

const MainNavigator = createStackNavigator(
  {
    LogIn: LogIn,
    MyAssignments: MyAssignments,
    Assignment: Assignment,
    AssignmentBuilder : AssignmentBuilder
  },
  {
    initialRouteName: 'LogIn'
  }
);

const navigator = createAppContainer(MainNavigator);

export default navigator;