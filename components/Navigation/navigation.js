import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../HomeScreen/HomeScreen.js';
import ClimateControl from '../ClimateAPI/ClimateControl.js';
import LockScreen from '../DoorStatusAPI/LockScreen';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ClimateControl" component={ClimateControl} />
        <Stack.Screen name="LockScreen" component={LockScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
