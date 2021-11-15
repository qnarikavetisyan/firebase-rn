import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthScreen, Login, Registration} from '../screens';

const Stack = createStackNavigator();

export const AuthNav = () => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="auth">
      <Stack.Screen name="auth" component={AuthScreen} />
      <Stack.Screen name="registration" component={Registration} />
      <Stack.Screen name="login" component={Login} />
    </Stack.Navigator>
  );
};
