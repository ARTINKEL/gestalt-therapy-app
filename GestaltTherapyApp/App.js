import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-navigation';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import MyAssignments from './MyAssignments.js';

const MainNavigator = createStackNavigator({
  MyAssignments: {screen: MyAssignments}
});

const navigator = createAppContainer(MainNavigator);

export default navigator;


