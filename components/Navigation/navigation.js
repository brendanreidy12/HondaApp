// navigation.js

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from '../HomeScreen/HomeScreen.js';
import DiscoverScreen from '../DiscoverScreen/DiscoverScreen.js';
import JourneysScreen from '../JourneysScreen/JourneysScreen';
import SafetyScreen from '../SafetyScreen/SafetyScreen';
import DashboardScreen from '../DashboardScreen/DashboardScreen';
import ClimateControl from '../ClimateAPI/ClimateControl.js';
import LockScreen from '../DoorStatusAPI/LockScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStackNavigator = () => {
    return (
      <Stack.Navigator
        initialRouteName="HomeStack"
        screenOptions={{
          headerStyle: {
            backgroundColor: 'black',
            elevation: 0, // for Android
            shadowOpacity: 0, // for iOS
          },
          headerTintColor: 'white',
        }}
      >
        <Stack.Screen
          name="Homepage"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="ClimateControl" component={ClimateControl} />
        <Stack.Screen name="LockScreen" component={LockScreen} />
      </Stack.Navigator>
    );
  };
  
  const Navigation = () => {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Home') {
                iconName = 'home';
              } else if (route.name === 'Discover') {
                iconName = 'th';
              } else if (route.name === 'Journeys') {
                iconName = 'map-marker';
              } else if (route.name === 'Safety') {
                iconName = 'shield';
              } else if (route.name === 'Dashboard') {
                iconName = 'tachometer';
              }
  
              return <Icon name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'red',
            tabBarInactiveTintColor: 'white',
            tabBarLabelStyle: { fontSize: 12 },
            tabBarStyle: { backgroundColor: 'grey', borderTopWidth: 0 },
          })}
        >
          <Tab.Screen
            name="Home"
            component={HomeStackNavigator}
            options={{ headerShown: false }}
          />
          <Tab.Screen name="Discover" component={DiscoverScreen} />
          <Tab.Screen name="Journeys" component={JourneysScreen} />
          <Tab.Screen name="Safety" component={SafetyScreen} />
          <Tab.Screen name="Dashboard" component={DashboardScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  };

export default Navigation;
