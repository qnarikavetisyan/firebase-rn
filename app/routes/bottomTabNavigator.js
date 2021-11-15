import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTabContent} from './bottomTabContent';
import {Main} from '../screens';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={props => <BottomTabContent {...props} />}
      initialRouteName="main">
      <Tab.Screen name="main" component={Main} />
      <Tab.Screen name="customCombo" component={Main} />
      <Tab.Screen name="profile" component={Main} />
    </Tab.Navigator>
  );
};
