import React, { useState } from 'react';
import {View, Text, ImageBackground, Divider, Flex, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from './styles';
import CenterImage from "../CenterCar";
import { LockScreen } from "../DoorStatusAPI";
import { ClimateControl } from '../ClimateAPI';

const CarItem = (props) => {
  return (
      <View style={styles.carContainer}>
      
      <ImageBackground source={require('../../assets/Images/gradient.jpg')}
      style={styles.image}
    />

      <View style={styles.titles}>
        <Text accessibilityLabel='plate' style={styles.plate}>RE20 WTL</Text>
        <Text accessibilityLabel='Model' style={styles.title}>Honda e</Text>
        <View style={styles.refreshButton}>
          <Button accessibilityLabel='refresh' title="Refresh" />
          <Text accessibilityLabel='last-updated' style={styles.subtitle}>Updated 45s ago</Text>
        </View>
      </View>

      <ClimateControl />

      <LockScreen />

      <CenterImage />

    </View>
  );
};

export default CarItem;