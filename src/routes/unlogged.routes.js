import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Login } from '../screens/Login';

const { Navigator, Screen } = createNativeStackNavigator();

export const UnLoggedRoutes = () => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName='Login'>
        <Screen name='Login' component={Login} />
      </Navigator>
    </NavigationContainer>
  );
};
